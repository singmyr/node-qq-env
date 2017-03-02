Easy-ENV
=========

A lightweight module giving you the easy way to handle environment variables.

## Installation
`npm install easy-env`

## Usage

### Initialization
```javascript
// It will use .env as default file if none provided.
var env = require('easy-env').load();

// Or provide one yourself.
var env = require('easy-env').load('.file_name');
```

### Retrieving environment variables
There's two ways
```javascript
var variable = process.env.VARIABLE_NAME;
var variable = process.env['VARIABLE_NAME'];
```
or
```javascript
var env = require('easy-env').load().env;
// With a default value if the variable isn't ofund.
var variable = env('VARIABLE_NAME', 'default_value');

// If the default value is omitted, and the variable isn't found
// null will be returned instead.
var variable = env('VARIABLE_NAME');
```

## Tests
`npm test`

## Release History

* `1.0.0` - *2017-03-02*
> **Initial release**