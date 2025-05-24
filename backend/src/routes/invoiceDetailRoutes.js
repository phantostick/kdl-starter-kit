import { Router } from 'express';
import {
  getInvoiceDetailsList,
  getInvoiceDetailsById,
  createInvoiceDetails,
  updateInvoiceDetails,
  deleteInvoiceDetails,
} from '../controllers/invoiceDetailController.js';

const router = Router();

router.get('/', getInvoiceDetailsList);       
router.get('/:id', getInvoiceDetailsById);     
router.post('/', createInvoiceDetails);        
router.put('/:id', updateInvoiceDetails);      
router.delete('/:id', deleteInvoiceDetails);   

export default router;
