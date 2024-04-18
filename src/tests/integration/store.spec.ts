import request from 'supertest'
import app from '@/app'
import setupTestDB from '../utils/setupTestDB'

setupTestDB()
let token: string

describe('Store Routes', () => {

  beforeEach(async () => {
  })

  describe('DELETE /store', () => {
    it('should delete store with 204 status ', async () => {
      const resInsert = await request(app).post('/test').send({ store: '' }).expect(200)
      await request(app).delete(`/stores/${resInsert.body._id}`).set('Authorization', `bearer ${token}`).expect(204)
    })
  })
})
