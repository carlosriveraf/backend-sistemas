import { Router } from 'express';
import { usersController } from '../controllers';

const router = Router();

router.post('/', usersController.createUser);
router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.get('/email/:email', usersController.getUserByEmail);
router.put('/:id', usersController.updateUserById);
router.delete('/:id', usersController.deleteUserById);

export default router;