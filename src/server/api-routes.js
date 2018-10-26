import express from 'express';
import people from './controllers/people';
import keyboard from './controllers/keyboard';
const router = express.Router();

router.get('/people', people.get);
router.get('/keyboard', keyboard.get);

export default router;
