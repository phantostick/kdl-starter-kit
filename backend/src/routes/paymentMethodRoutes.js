import { Router } from 'express';
import {
  getPaymentMethodsList,
  getPaymentMethodsById,
  createPaymentMethods,
  updatePaymentMethods,
  deletePaymentMethods,
} from '../controllers/paymentMethodController.js';

const router = Router();

router.get('/', getPaymentMethodsList);       
router.get('/:id', getPaymentMethodsById);     
router.post('/', createPaymentMethods);        
router.put('/:id', updatePaymentMethods);      
router.delete('/:id', deletePaymentMethods);   

export default router;
