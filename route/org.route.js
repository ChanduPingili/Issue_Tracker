const express = require('express');
const route = express.Router();
const {createOrg , getOrg , updateOrg , deleteOrg} = require('../controller/org.controller');

route.post('/', createOrg);
route.get('/:id', getOrg);
route.put('/:id', updateOrg);
route.delete('/:id',deleteOrg);

module.exports = route;