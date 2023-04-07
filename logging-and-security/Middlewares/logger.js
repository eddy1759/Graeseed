const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      // filename: './logs/info.log',
      level: 'info',
      maxsize: 5242880, // 1MB
      maxFiles: 5,
      tailable: true,
      // zippedArchive: true,
      format: winston.format.combine(
        winston.format.timestamp(),
        // winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
      )
    }),
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
      maxsize: 1000000, // 1MB
      maxFiles: 5,
      tailable: true,
      // zippedArchive: true,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
      )
    }),
    new winston.transports.File({
      filename: './logs/warn.log',
      level: 'warn',
      maxsize: 1000000, // 1MB
      maxFiles: 10,
      tailable: true,
      // zippedArchive: true,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
      )
    })
  ],
  exitOnError: false
});

module.exports = logger;
