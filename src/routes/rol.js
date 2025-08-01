import {Router} from 'express'
import rolHttp from "../controllers/";
const router=Router()

// GET /api/roles - Listar roles disponibles
router.get('/',
    //Validaciones
    [],
    //Controlador
    rolHttp.rolGet
)

// POST /api/roles - Crear nuevo rol (Admin)
router.post('/',
    //Validaciones
    [],
    //Controlador
    rolHttp.rolPost
)

// PUT /api/roles/:id - Actualizar rol (Admin)
router.put('/:id',
    //Validaciones
    [],
    //Controlador
    rolHttp.rolPut
)

// DELETE /api/roles/:id - Eliminar rol (Admin)
router.delete('/:id',
    //Validaciones
    [],
    //Controlador
    rolHttp.rolDelete
)

export default router