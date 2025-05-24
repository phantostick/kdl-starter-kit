import { Router } from 'express';
import {
  getSeoList, 
  getSeoById,
  createSeo,
  updateSeo,
  deleteSeo,
} from '../controllers/seoController.js';

const router = Router();

router.get('/', getSeoList);       
router.get('/:id', getSeoById);     
router.post('/', createSeo);        
router.put('/:id', updateSeo);      
router.delete('/:id', deleteSeo);   

export default router;
