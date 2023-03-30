import express from 'express';
import {
  CreateClient,
  DeleteClient,
  getAllClients,
  getClient,
  UpdateClient,
} from '../controllers/ClientController.js';

const router = express.Router();

router.get('/', getAllClients);
router.get('/:id', getClient);
router.post('/', CreateClient);
router.put('/:id', UpdateClient);
router.delete('/:id', DeleteClient);

export default router;
