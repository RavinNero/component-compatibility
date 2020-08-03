const express = require('express');
const userController = require('../src/controllers/userController');
const mbController = require('../src/controllers/motherBoardsController');
const cpuController = require('../src/controllers/cpuController');

const Route = express.Router();


// Users

Route.get('/users', userController.index);

Route.get('/users/:id', userController.show);

Route.post('/users', userController.store);

Route.put('/users/:id', userController.update);

Route.delete('/users/:id', userController.delete);


//Mother boards

Route.get('/mother-boards', mbController.index);

Route.get('/mother-boards/:id', mbController.show);

Route.post('/mother-boards', mbController.store);

Route.put('/mother-boards/:id', mbController.update);

Route.delete('/mother-boards/:id', mbController.delete);


// Cpu

Route.get('/cpus', cpuController.index);

Route.get('/cpus/:id', cpuController.show);

Route.post('/cpus', cpuController.store);

Route.put('/cpus/:id', cpuController.update);

Route.delete('/cpus/:id', cpuController.delete);


// Compatibility

Route.post('/cpus-compatible', mbController.listCpusCompatible);

module.exports = Route;
