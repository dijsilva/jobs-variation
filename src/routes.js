const express = require('express');
const searchController = require('./Controller/searchController')
const weekController = require('./Controller/weekController')
const indexController = require('./Controller/indexController')
const updateJobsController = require('./Controller/updateJobsController')

const routes =  express.Router()

// pages
routes.get('/', indexController.index)
routes.get('/update', updateJobsController.index)


// routes for services
routes.get('/search', searchController.create)

routes.get('/week/create/:week', weekController.create)
routes.get('/week/all', weekController.index)
routes.get('/week/search/:week', weekController.show)


module.exports = routes;