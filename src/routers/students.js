import { Router } from 'express';
import {
  getStudentsController,
  getStudentByIdController,
  createStudentController,
  deleteStudentController,
  updateStudentController,
  patchStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/student.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getStudentsController));

router.get('/:studentId', ctrlWrapper(getStudentByIdController));

router.post(
  '/',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

router.delete('/:studentId', ctrlWrapper(deleteStudentController));

router.put(
  '/:studentId',
  validateBody(updateStudentSchema),
  ctrlWrapper(updateStudentController),
);

router.patch(
  '/:studentId',
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);

export default router;
