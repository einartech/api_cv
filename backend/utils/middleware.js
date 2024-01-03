// middleware.js
import logger from './logger.js';

export const requestLogger = (req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
};