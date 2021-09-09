const dataCalderas = require('../data/calderas.json');
const fs = require('fs');

exports.findAllCalderas = (req, res) => {
    const calderas = fs.readFileSync(dataCalderas);
    return JSON.parse(calderas);
}

exports.createCaldera = () => {
    console.log('create caldera');
}

exports.updateCaldera = () => {
    console.log('update caldera');
}

exports.deleteCaldera = ()  => {
    console.log('delete caldera');
}

exports.findOneCaldera = () => {
    console.log('find one caldera');
}