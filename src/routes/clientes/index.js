const express = require('express');
const ctrlClientes = require('../../controllers/clientes');
const router = express.Router();

router.get('/', ctrlClientes.getClientes);
router.get('/:id', ctrlClientes.getClientesById);
router.post('/', ctrlClientes.addClientes);
router.put('/:id', ctrlClientes.updateClienteById);
router.delete('/:id', ctrlClientes.deleteClienteById);

module.exports = router