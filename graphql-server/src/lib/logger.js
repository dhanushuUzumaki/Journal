import winston from 'winston';

const alignedWithColorsAndTime = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

const logger = winston.createLogger({
  level: 'info',
  format: alignedWithColorsAndTime,
  transports: [
    new winston.transports.File({
      filename: 'logs/journal.log',
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false,
      humanReadableUnhandledException: true
    }),
    new winston.transports.Console()
  ],
  exitOnError: false
});

logger.stream = {
  write: message => logger.info(message)
};
export default logger;
