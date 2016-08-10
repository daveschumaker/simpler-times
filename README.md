# simpler-times
A super simple module to calculate relative dates.

```
Posted 5 minutes ago
Updated 2 hours ago
Last logged in 1 day ago
```

## Installation

`npm install simpler-times --save`

## Usage

```
var simplertimes = require('simpler-times');

var timestamp = new Date('Wed, 21 Oct 2015 19:28:00 GMT').getTime();
var howLong = simplertimes(timestamp);

console.log('Back To The Future Day was', howLong);
```

## Contributing

Contributions are welcome! Please maintain the existing coding style.

Fork this repo, make commits to your branch, add unit tests for any new or changed functionality and [submit a pull request](https://github.com/daveschumaker/simpler-times/compare). Remember to lint and test your code. Thanks!

## Release History

* 0.1.1 Change _parseInt()_ to _Math.round()_. Expand tests and remove an unused variable.
* 0.1.0 Initial release
