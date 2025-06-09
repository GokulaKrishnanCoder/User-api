import express from 'express';
import {
    createUser,
    updateUser, 
    deleteUser,
    getUser
} from '../controllers/app.controller.js';
export const router = express.Router();

router.get('/', getUser);
router.put('/update/:id',updateUser );
router.post('/create',createUser );
router.delete('/delete/:id',deleteUser );
router.get('/read/:id',getUser );
