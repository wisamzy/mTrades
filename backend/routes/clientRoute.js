// routes/clientRoute.js
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Route to get all clients
router.get('/', clientController.getAllClients);

// Route to get a client by ID
router.get('/:id', clientController.getClientById);

// Route to create a new client
router.post('/', clientController.createClient);

// Route to update a client by ID
router.put('/:id', clientController.updateClient);

// Route to delete a client by ID
router.delete('/:id', clientController.deleteClient);

module.exports = router;
