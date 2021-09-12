const tecnicosSchema = require('../../src/models/Tecnicos')

const getTecnicos = async (req, res) => {
    try{
        const response = await tecnicosSchema.find()
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Información tecnicos exitosa'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const addTecnico =  async (req, res) => {
    try{
        const tecnico = new tecnicosSchema(req.body)
        const newTecnico = await tecnico.save()

        return res.status(200).json({
            data: newTecnico,
            error: false,
            msg: 'Tecnico creado correctamente'
        })
    }catch (error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const getTecnicoById = async (req, res) => {
    try{
        const response = await tecnicosSchema.findOne({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el usuario'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Usuario encontrado con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const deleteTecnicoById = async (req, res) => {
    try{
        const response = await tecnicosSchema.findOneAndRemove({ _id: req.params.tenicoId })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el usuario'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Usuario eliminado con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const updateTecnicoById = async (req, res) => {
    try {
        const tecnico = await tecnicosSchema.findById({ _id: req.body.tecnico })
        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el tecnico'
            })
        }

        const response = await tecnicosSchema.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'Error al actualizar el tecnico',
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
    getTecnicos,
    addTecnico,
    deleteTecnicoById,
    getTecnicoById,
    updateTecnicoById
}

