const express = require('express');
const searchController = require('./Controller/searchController')
const weekController = require('./Controller/weekController')
const indexController = require('./Controller/indexController')

const routes =  express.Router()

routes.get('/', indexController.index)


routes.get('/search', searchController.create)

routes.get('/week/create/:week', weekController.create)
routes.get('/week/all', weekController.index)
routes.get('/week/search/:week', weekController.show)


module.exports = routes;