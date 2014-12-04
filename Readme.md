# Netrc2

Simple utility to read and save [netrc](http://www.gnu.org/software/inetutils/manual/html_node/The-_002enetrc-File.html) files.

*Why netrc2?* Because "netrc" is already taken on npm.

## Installation

```
npm install netrc2
```

## Usage

**Note**: Netrc2 is synchronous library.

```javascript
var netrc = require('netrc2');

var machines = netrc(); // read .netrc in $HOME

var auth = machines['example.com'];
var login = auth[0];
var password = auth[1];

machines['example.com'] = ['new login', 'new password'];
machines.save();
```

## Tests

```
npm test
```

## License

Netrc2 is released under the MIT License.
