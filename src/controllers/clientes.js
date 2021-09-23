const clientesSchema = require('../../src/models/clientes')

const getClientes = async (req, res) => {
    try{
        const response = await clientesSchema.find()
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Información calderas exitosa'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const addClientes =  async (req, res) => {
    try{
        const cliente = new clientesSchema(req.body)
        const newClientes= await caldera.save()

        return res.status(200).json({
            data: newClientes,
            error: false,
            msg: 'Cliente creado correctamente'
        })
    }catch (error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const getClientesById = async (req, res) => {
    try{
        const response = await clientesSchema.findOne({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el cliente'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Cliente encontrada con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const deleteClienteById = async (req, res) => {
    try{
        const response = await clientesSchema.findOneAndRemove({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el cliente'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Cliente eliminado con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const updateClienteById = async (req, res) => {
    try {
        const cliente = await clientesSchema.findById({ _id: req.body.clientes })
        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el cliente'
            })
        }

        const response = await clientesSchema.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'Error al actualizar el cliente',
            });
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error,
        });
    }
}


module.exports = {
    getClientes,
    addClientes,
    deleteClienteById,
    getClientesById,
    updateClienteById
}
