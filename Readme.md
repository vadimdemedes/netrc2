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

The MIT License (MIT) Copyright © 2014 Vadim Demedes vdemedes@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.