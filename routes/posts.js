import express from 'express'
const router = express.Router()
import postsController from '../Controllers/postsController.js'

router.get('/', postsController.index)

router.get('/:slug', postsController.show)

router.get('/:tag', postsController.printByTag)

router.post('/', postsController.store)

router.put('/:slug', postsController.update)

router.delete('/:slug', postsController.destroy)

export default router