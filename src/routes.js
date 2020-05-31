const express = require('express');
const searchController = require('./Controller/searchController')
const weekController = require('./Controller/weekController')

const routes =  express.Router()

routes.get('/search', searchController.create)

routes.get('/week', weekController.create)


module.exports = routes;