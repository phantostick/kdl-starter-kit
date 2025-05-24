import { Router } from 'express';
import { upload } from '../middleware/uploadMiddleware.js'
import {
  getSettingsList,
  getSettingsById,
  createSetting,
  updateSetting,
  deleteSetting,
  updateMultipleSettings,
} from '../controllers/settingController.js';
const router = Router();

router.get('/', getSettingsList);       
router.get('/:id', getSettingsById);     
router.post('/', createSetting);        
router.put('/:id', upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'favicon', maxCount: 1 }
  ]), updateSetting);
router.delete('/:id', deleteSetting);  
router.post('/update-multiple', updateMultipleSettings);

export default router;
