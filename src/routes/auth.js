import {Router} from 'express'
import authHttp from "../controllers/";
const router=Router()

// POST /api/auth/register - Registro de usuario
router.post('/register',
    //Validaciones
    [],
    //Controlador
    authHttp.authPostRegister
)
// POST /api/auth/login - Inicio de sesión
router.post('/login',
    //Validaciones
    [],
    //Controlador
    authHttp.authPostLogin
)

// POST /api/auth/refresh - Renovar token JWT
router.post('/refresh',
    //Validaciones
    [],
    //Controlador
    authHttp.authPostRefresh
)

// POST /api/auth/logout - Cerrar sesión
router.post('/logout',
    //Validaciones
    [],
    //Controlador
    authHttp.authPostLogout
)

// POST /api/auth/forgot-password - Recuperar contraseña
router.post('/forgot-password',
    //Validaciones
    [],
    //Controlador
    authHttp.authPostForgot
)

// POST /api/auth/reset-password - Restablecer contraseña
router.post('/reset-password',
    //Validaciones
    [],
    //Controlador
    authHttp.authPostReset
)

export default router