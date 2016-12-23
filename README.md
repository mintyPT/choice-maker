# Choice Maker

This module is meant to load configuration files from a folder by merging them acording to the following order:

1. `config/production.js`
2. `config/dev.js`
3. `config/god.js` (not mandatory)

This module will also add the following keys to your configuration file:

- `env`: the environment 
- `isDev`: if we are in the development environment
- `isProduction`: if we are in the production environment 
        
## Code Example

    const config = require('choice-maker')({path: path.join(__dirname, 'config')});

### Configuration file example

    module.exports = {
        cdn       : 'static.foo.com',
        mailchimp: {
            key : 'foobar99',
            path: '/foo/bar/'
        }
    };


## Installation

    npm install --save choice-maker

## API Reference

    choiceMaker(options);

- `options.path` (object): path to the directory with configuration files

## Tests

Sorry, none. 

## License

MIT License

Copyright (c) 2016 mintyPT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

