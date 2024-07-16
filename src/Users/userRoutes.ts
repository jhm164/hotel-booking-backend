import express from 'express';
import {User} from './userModel';

const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
  try {
    console.log("in here",req)
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err:any) {
    res.status(400).send(err.message);
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err:any) {
    res.status(500).send(err.message);
  }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(user);
  } catch (err:any) {
    res.status(500).send(err.message);
  }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(user);
  } catch (err:any) {
    res.status(400).send(err.message);
  }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send('User deleted successfully');
  } catch (err:any) {
    res.status(500).send(err.message);
  }
});

export default router;
