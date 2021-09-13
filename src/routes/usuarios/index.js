const express = require('express');
const ctrlUsuarios = require('../../controllers/usuarios');
const router = express.Router();

router.get('/', ctrlUsuarios.getUsuarios);
router.get('/:id', ctrlUsuarios.getUsuarioById);
router.post('/', ctrlUsuarios.addUsuario);
router.put('/:id', ctrlUsuarios.updateUsuarioById);
router.delete('/:id', ctrlUsuarios.deleteUsuarioById);

module.exports = router