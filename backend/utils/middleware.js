// middleware.js
import logger from './logger.js';
import { errorHandler } from './errorHandler.js';

export const requestLogger = (req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
};

export const notFoundHandler = (req, res) => {
  res.status(404).json({ error: 'Not Found' });
};

export { errorHandler };
