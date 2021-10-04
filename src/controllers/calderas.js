const calderasSchema = require("../../src/models/Calderas");

const getCalderas = async (req, res) => {
    try{
        const response = await calderasSchema.find();
        return res.status(200).json({
            data: response,
            error: false,
            msg: "Información calderas exitosa"
        });
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};

const addCaldera =  async (req, res) => {
    try{
        const caldera = new calderasSchema(req.body)
        const newCaldera = await caldera.save()

        return res.status(200).json({
            data: newCaldera,
            error: false,
            msg: 'Caldera creada correctamente'
        })
    }catch (error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const getCalderaById = async (req, res) => {
    try{
        const response = await calderasSchema.findOne({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe la caldera'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Caldera encontrada con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const deleteCalderaById = async (req, res) => {
    try{
        const response = await calderasSchema.findOneAndRemove({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe la caldera'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Caldera eliminada con éxito'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const updateCalderaById = async (req, res) => {
    try {
        const caldera = await tecnicosSchema.findById({ _id: req.body.caldera })
        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe la caldera'
            })
        }

        const response = await calderasSchema.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'Error al actualizar la caldera',
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
    getCalderas,
    addCaldera,
    deleteCalderaById,
    getCalderaById,
    updateCalderaById
}

