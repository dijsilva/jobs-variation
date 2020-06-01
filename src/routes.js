const express = require('express');
const searchController = require('./Controller/searchController')
const weekController = require('./Controller/weekController')

const routes =  express.Router()

routes.get('/search', searchController.create)

routes.get('/week', weekController.create)
routes.get('/week/all', weekController.index)
routes.get('/week/search/:week', weekController.show)


module.exports = routes;