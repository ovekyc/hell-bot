import express from 'express';
import people from './controllers/people';
const router = express.Router();

router.get('/people', people.get);

export default router;
