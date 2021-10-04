const edificiosSchema = require("../../src/models/Edificios");

const getEdificios = async (req, res) => {
    try{
        const response = await edificiosSchema.find();
        return res.status(200).json({
            data: response,
            error: false,
            msg: "Edificio encontrado"
        });
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};

const addEdificio =  async (req, res) => {
    try{
        const edificio = new edificiosSchema(req.body);
        const newEdificio = await edificio.save();

        return res.status(200).json({
            data: newEdificio,
            error: false,
            msg: "Edificio creado correctamente"
        });
    }catch (error){
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};

const getEdificioById = async (req, res) => {
    try{
        const response = await edificiosSchema.findOne({ _id: req.params.id });

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: "Edificio no encontrado"
            });
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: "Edificio encontrado correctamente"
        });
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};

const deleteEdificioById = async (req, res) => {
    try{
        const response = await edificiosSchema.findOneAndRemove({ _id: req.params.id });

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: "No existe el edificio"
            });
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: "Edificio eliminado correctamente"
        });
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        });
    }
};

const updateEdificioById = async (req, res) => {
    try {
        const edificio = await edificiosSchema.findById({ _id: req.body.caldera });
        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: "No existe el edificio"
            });
        }

        const response = await edificiosSchema.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: "Error al actualizar la informacion del edificio",
            });
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({
            error: true,
            msg: error,
        });
    }
};


module.exports = {
    getEdificios,
    addEdificio,
    deleteEdificioById,
    getEdificioById,
    updateEdificioById
};
