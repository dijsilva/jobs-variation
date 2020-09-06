import { Router } from 'express'
import JobsController from './controller/jobs'
import WeeksController from './controller/weeks'

const routes = Router()

// jobs
routes.get('/jobs', JobsController.index)
routes.get('/jobs/view/:id', JobsController.view)


// weeks
routes.get('/weeks', WeeksController.index)

export default routes;