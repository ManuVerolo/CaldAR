const dataTecnicos = require('../data/tecnicos.json');
const fs = require('fs');

exports.findAllTecnicos = (req, res) => {
    const tecnicos = fs.readFileSync(dataTecnicos);
    return JSON.parse(tecnicos);
}

exports.createTecnico = () => {
    console.log('create tecnico');
}

exports.updateTecnico = () => {
    console.log('update tecnico');
}

exports.deleteTecnico = ()  => {
    console.log('delete tecnico');
}

exports.findOneTecnico = () => {
    console.log('find one tecnico');
}