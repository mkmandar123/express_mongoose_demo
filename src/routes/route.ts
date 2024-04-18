import express from 'express'
import {handleAnotherRoute, handleTestRoute} from "@/controllers";
const router = express.Router()

router.post('/test', handleTestRoute)
router.get('/test2', handleAnotherRoute)

export default router
