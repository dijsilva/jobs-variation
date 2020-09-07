import { Router } from 'express'
import JobsController from './controller/jobs'
import WeeksController from './controller/weeks'

const routes = Router()

// jobs
routes.get('/jobs', JobsController.index)
routes.post('/jobs', JobsController.store)
routes.get('/jobs/view/:id', JobsController.view)
routes.get('/jobs/update/:id', JobsController.update)
routes.get('/jobs/delete/:id', JobsController.delete)


// weeks
routes.get('/weeks', WeeksController.index)
routes.get('/weeks/view/:id', WeeksController.view)

export default routes;