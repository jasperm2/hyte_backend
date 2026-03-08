import express from 'express';
import {body} from 'express-validator';
import {
  deleteEntry,
  getEntries,
  getEntryById,
  postEntry,
} from '../controllers/entry-controller.js';
import {authenticateToken} from '../middlewares/authentication.js';
import {validationErrorHandler} from '../middlewares/error-handlers.js';

const entryRouter = express.Router();

entryRouter.route('/').get(authenticateToken, getEntries).post(
  authenticateToken,
  body('entry_date').isISO8601().withMessage('Date must be in ISO8601 format'),
  body('mood').optional().isString().trim(),
  body('weight').optional().isNumeric().withMessage('Weight must be a number'),
  body('sleep_hours').optional().isNumeric(),
  validationErrorHandler,
  postEntry,
);

entryRouter
  .route('/:id')
  .get(getEntryById)
  .delete(authenticateToken, deleteEntry);

export default entryRouter;
