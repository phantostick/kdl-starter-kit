import { Router } from 'express';
import {
  getTransactionsList,
  getTransactionsById,
  createTransactions,
  updateTransactions,
  deleteTransactions,
} from '../controllers/transactionController.js';

const router = Router();

router.get('/', getTransactionsList);       
router.get('/:id', getTransactionsById);     
router.post('/', createTransactions);        
router.put('/:id', updateTransactions);      
router.delete('/:id', deleteTransactions);   

export default router;
