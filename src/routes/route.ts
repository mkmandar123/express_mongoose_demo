import express from 'express'
import { User } from "@/models/user.model";

const router = express.Router()

router.get('/test', async (req, res, next) => {
  try {
    const user = new User({ firstName: 'Mandar', lastName: 'K' })
    await user.save();
    res.send(`Wokring..!!! ${user}`);
  } catch (e) {
    next(e)
  }
})

export default router
