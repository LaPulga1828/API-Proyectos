import User from '../models/user.js'

const userHttp = {
    //GET /api/users - Listar usuarios (Admin)
    userGet: async (req, res) => {
        //ejemplo
        try {
            const User = await User.find()
                .populate("firstName")
            res.json({ compras })
        } catch (error) {
            res.status(400).json({ error })
        }
    },

    //GET /api/users/profile - Perfil del usuario actual
    userGetProfile:async(req, res) => {
        try{}
        catch{}
    },

    // PUT /api/users/profile - Actualizar perfil
    userPutProfile:async(req, res) => {
        try{}
        catch(error){}
    },

    // DELETE /api/users/:id - Eliminar usuario (Admin)
    userDelete:async(req, res) => {
        try{}
        catch(error){}
    },
}

export default userHttp