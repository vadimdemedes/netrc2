# netrc2 [![Circle CI](https://circleci.com/gh/vdemedes/netrc2.svg?style=svg)](https://circleci.com/gh/vdemedes/netrc2)

Simple utility to read and save [netrc](http://www.gnu.org/software/inetutils/manual/html_node/The-_002enetrc-File.html) files.

*Why netrc2?* Because "netrc" is already taken on npm.


### Installation

```
npm install netrc2 --save
```


### Usage

**Note**: netrc2 is a synchronous module.

```javascript
var netrc = require('netrc2');

var machines = netrc(); // read .netrc in $HOME

var auth = machines['example.com'];
var login = auth[0];
var password = auth[1];

machines['example.com'] = ['new login', 'new password'];
machines.save();
```


### Tests

```
make test
```


### License

netrc2 is released under the MIT License.
