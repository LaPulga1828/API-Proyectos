import {Router} from 'express'
import usersHttp from "../controllers/user.js";
const router=Router()

//GET /api/users - Listar usuarios (Admin)
router.get('/',
    //Validaciones
    [],
    //Controlador
    usersHttp.userGet
)

//GET /api/users/profile - Perfil del usuario actual
router.get('/profile',
    //Validaciones
    [],
    //Controlador
    usersHttp.userGetProfile
)

// PUT /api/users/profile - Actualizar perfil
router.put('/profile',
    //Validaciones
    [],
    //Controlador
    usersHttp.userPutProfile
)

// DELETE /api/users/:id - Eliminar usuario (Admin)
router.delete('/:id',
    //Validaciones
    [],
    //Controlador
    usersHttp.userDelete
)

// PUT /api/users/:id/role - Cambiar rol (Admin)
router.put('/:id/role',
    //Validaciones
    [],
    //Controlador
    usersHttp.userPutRole
)

export default router