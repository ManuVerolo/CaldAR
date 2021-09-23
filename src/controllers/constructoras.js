const constructorasSchema = require('../../src/models/constructoras')

const getConstructoras = async (req, res) => {
    try{
        const response = await constructorasSchema.find()
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Información constructoras exitosa'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const addConstructora =  async (req, res) => {
    try{
        const constructoras = new constructorasSchema(req.body)
        const newconstructoras = await constructoras.save()

        return res.status(200).json({
            data: newconstructoras,
            error: false,
            msg: 'Constructora creada correctamente'
        })
    }catch (error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const getConstructoraById = async (req, res) => {
    try{
        const response = await constructorasSchema.findOne({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe  constructora'
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

const deleteConstructoraById = async (req, res) => {
    try{
        const response = await constructorasSchema.findOneAndRemove({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe  constructora'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Constructora eliminada con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const updateConstructoraById = async (req, res) => {
    try {
        const constructora = await constructorasSchema.findById({ _id: req.body.clientes })
        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe constructora'
            })
        }

        const response = await constructorasSchema.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'Error al actualizar el constructora',
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
    getConstructoras,
    addConstructora,
    deleteConstructoraById,
    getConstructoraById,
    updateConstructoraById
}