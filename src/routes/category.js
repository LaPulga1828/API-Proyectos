import {Router} from 'express'
import categoryHttp from "../controllers/";
const router=Router()

// GET /api/categories - Listar categorías
router.get('/',
    //Validaciones
    [],
    //Controlador
    categoryHttp.categoryGet
)

// POST /api/categories - Crear categoría
router.post('/',
    //Validaciones
    [],
    //Controlador
    categoryHttp.categoryPostRegister
)

// PUT /api/categories/:id - Actualizar categoría
router.put('/:id',
    //Validaciones
    [],
    //Controlador
    categoryHttp.categoryPut
)

// DELETE /api/categories/:id - Eliminar categoría
router.delete('/:id',
    //Validaciones
    [],
    //Controlador
    categoryHttp.categoryDelete
)

export default router