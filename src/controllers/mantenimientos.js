const mantenimientosSchema = require('../../src/models/mantenimientos')

const getMantenimientos = async (req, res) => {
    try{
        const response = await mantenimientosSchema.find()
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Información de Mantenimientos exitosa'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const addMantenimientos =  async (req, res) => {
    try{
        const mantenimientos = new mantenimientosSchema(req.body)
        const newmantenimientos = await mantenimientos.save()

        return res.status(200).json({
            data: newmantenimientos,
            error: false,
            msg: 'Mantenimiento creado correctamente'
        })
    }catch (error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const getMantenimientoById = async (req, res) => {
    try{
        const response = await mantenimientosSchema.findOne({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe  mantenimiento'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Mantimiento encontrada con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const deleteMantenimientoById = async (req, res) => {
    try{
        const response = await mantenimientosSchema.findOneAndRemove({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe  mantenimiento'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Mantenimiento eliminado con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const updateMantenimientoById = async (req, res) => {
    try {
        const caldera = await tecnicosSchema.findById({ _id: req.body.clientes })
        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe mantenimiento'
            })
        }

        const response = await mantenimientosSchema.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'Error al actualizar mantenimiento',
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
    getMantenimientos,
    addMantenimientos,
    deleteMantenimientoById,
    getMantenimientoById,
    updateMantenimientoById
}