'use strict';

/**
 * Dependencies
 */

const home = require('user-home');
const fs = require('fs');


/**
 * Expose `netrc`
 */

module.exports = netrc;

netrc.parse = parse;


/**
 * Netrc
 */

function netrc (path) {
	if (!path) {
		path = home + '/.netrc';
	}

	let result = {};
	
	try {
		let file = fs.readFileSync(path, 'utf-8');
		result = parse(file);
	} catch (err) {
		// file does not exist
	}
	
	// define non-enumerable methods
	// to format and save netrc object
	Object.defineProperty(result, 'toString', {
		enumerable: false,
		value: toString.bind(result)
	});
	
	Object.defineProperty(result, 'save', {
		enumerable: false,
		value: save.bind(result, path)
	});
	
	return result;
}

/**
 * Utilities
 */

function parse (netrc) {
	let result = {};
	let host, login, password;

	// if netrc content is empty, just return empty object
	if(!netrc) {
		return result;
	}
	
	netrc.split('\n').forEach(function (line) {
		if (/^(machine|default)/i.test(line)) {
			// if host was already set
			// and new machine entry is matched
			// set previously matched login and password
			// to resulting object
			// and reset
			if (host) {
				result[host] = [login, password];
				
				login = '';
				password = '';
			}
			
			if (/default/.test(line)) {
				host = 'default';
			} else {
				host = /machine\s(.+)/i.exec(line)[1];
			}
		} else if (/login/i.test(line)) {
			login = /login\s(.+)/i.exec(line)[1];
		} else if (/password/i.test(line)) {
			password = /password\s(.+)/i.exec(line)[1];
		}
	});
	
	// after loop finishes
	// last machine entry
	// needs to be set manually
	result[host] = [login, password];
	
	return result;
}

function toString () {
	let result = '';
	
	let keys = Object.keys(this);
	let self = this;

	keys.forEach(function (key) {
		let entry = self[key];

		let login = entry[0];
		let password = entry[1];

		// entry title
		if (key === 'default') {
			result += key;
		} else {
			result += 'machine ' + key;
		}

		result += '\n';

		// login
		result += '\tlogin ' + login;
		result += '\n';

		// password, if exists
		if (password) {
			result += '\tpassword ' + password;
			result += '\n';
		}
	});
	
	return result;
};

function save (path) {
	fs.writeFileSync(path, this.toString(), 'utf-8');
	
	return this;
}
