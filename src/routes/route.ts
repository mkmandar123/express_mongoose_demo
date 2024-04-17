import express from 'express'

const router = express.Router()

router.post('/test', async (req, res, next) => {
  try {
    res.send('Wokring..!!!');
  } catch (e) {
    next(e)
  }
})

export default router
