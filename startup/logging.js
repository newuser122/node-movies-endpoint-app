const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({
      filename: 'uncaughtExceptions.log',
      handleExceptions: true,
    })
  );

  process.on('unhandledRejection', (ex) => {
    throw ex;
  });

  winston.add(new winston.transports.File(), {
    filename: 'logfile.log',
    handleExceptions: true,
  });
  // winston.add(winston.transports.MongoDB, {
  //   db: 'mongodb://localhost/vidly',
  //   level: 'info'
  // });
};
