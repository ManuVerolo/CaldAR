const usuariosSchema = require('../../src/models/Usuarios')

const getUsuarios = async (req, res) => {
    try{
        const response = await usuariosSchema.find()
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Usuario encontrado'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const addUsuario =  async (req, res) => {
    try{
        const usuario = new usuariosSchema(req.body)
        const newUsuario = await usuario.save()

        return res.status(200).json({
           data: newUsuario,
            error: false,
            msg: 'Usuario creado correctamente'
        })
    }catch (error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

//const addUsuario = async(req, res) =>{
//    const usuario = new usuariosSchema({
//        name: req.body.name,
//        last_name: req.body.last_name,
//        email: req.body.email,
//        active: req.body.active,
//        cargo: req.body.cargo
//    });
//    try{
//        const newUsuario = await usuario.save();
//        res.json(newUsuario);
//    } catch (error){
//        res.json({message: "error"})
//    }
//}

const getUsuarioById = async (req, res) => {
    try{
        const response = await usuariosSchema.findOne({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'Usuario no encontrado'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Usuario encontrado correctamente'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const deleteUsuarioById = async (req, res) => {
    try{
        const response = await usuariosSchema.findOneAndRemove({ _id: req.params.id })

        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el usuario'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Usuario eliminado correctamente'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

const updateUsuarioById = async (req, res) => {
    try {
        const usuario = await usuariosSchema.findById({ _id: req.body.caldera })
        if(!response || response.length === 0){
            return res.status(404).json({
                error: true,
                msg: 'No existe el usuario'
            })
        }

        const response = await usuariosSchema.findByIdAndUpdate(req.params.id, req.body, {new: true, });
        if (!response) {
            return res.status(400).json({
                error: true,
                msg: 'Error al actualizar la informacion del usuario',
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
    getUsuarios,
    addUsuario,
    deleteUsuarioById,
    getUsuarioById,
    updateUsuarioById
}

