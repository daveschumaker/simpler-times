# simpler-times
A super simple module to calculate relative dates.

`Posted 5 minutes ago`

`Updated 2 hours ago`

`Last logged in 1 day ago`

## Installation

`npm install simpler-times --save`

## Usage

```
    var simplertimes = require('simpler-times');

    var timestamp = new Date('Wed, 21 Oct 2015 19:28:00 GMT').getTime();
    var howLong = simplertimes(timestamp);

    console.log('Back To The Future Day was', howLong, 'ago');
```

## Contributing

Please maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
