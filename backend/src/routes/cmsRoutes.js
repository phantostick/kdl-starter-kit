import { Router } from 'express';
import {
  getCmsList,
  getCmsById,
  createCms,
  updateCms,
  deleteCms,
} from '../controllers/cmsController.js';

const router = Router();

router.get('/', getCmsList);       
router.get('/:id', getCmsById);     
router.post('/', createCms);        
router.put('/:id', updateCms);      
router.delete('/:id', deleteCms);   

export default router;
