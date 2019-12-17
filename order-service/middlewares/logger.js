var { createLogger, format, transports } = require('winston');
var path = require('path');

// define the custom settings for each transport (file, console)
var options = {
    errorFile: {
        level: 'error',
        filename: `./logs/error.log`,
        handleExceptions: true,
        json: true,
        format: format.combine(
            format.label({ label: path.basename(process.mainModule.filename) }),
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            format.json(),
        )
    },
    infoFile: {
        level: 'info',
        filename: `./logs/app.log`,
        json: true,
        format: format.combine(
            format.label({ label: path.basename(process.mainModule.filename) }),
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            format.json(),
        )
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
    }
};

// instantiate a new Winston Logger with the settings defined above
var logger = createLogger({
    transports: [
        new transports.File(options.errorFile),
        new transports.File(options.infoFile)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

if (process.env.NODE_ENV === 'dev') {
    logger.add(new transports.Console(options.console));
}

module.exports = logger;