import { Router } from 'express';
import {
  getSubscriptionsList,
  getSubscriptionsById,
  createSubscriptions,
  updateSubscriptions,
  deleteSubscriptions,
} from '../controllers/subscriptionController.js';

const router = Router();

router.get('/', getSubscriptionsList);       
router.get('/:id', getSubscriptionsById);     
router.post('/', createSubscriptions);        
router.put('/:id', updateSubscriptions);      
router.delete('/:id', deleteSubscriptions);   

export default router;
