import { Router } from 'express';
import {
  getClientsList, 
  getClientsById,
  createClient,
  updateClient,
  deleteClient,
} from '../controllers/clientController.js';

const router = Router();

router.get('/', getClientsList);       
router.get('/:id', getClientsById);     
router.post('/', createClient);        
router.put('/:id', updateClient);      
router.delete('/:id', deleteClient);   

export default router;
