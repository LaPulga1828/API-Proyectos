import {Router} from 'express'
import commentHttp from "../controllers/";
const router=Router()

//Esta dos estan en las ruta de projects
// GET /api/projects/:id/comments - Comentarios del proyecto
// POST /api/projects/:id/comments - Comentar en proyecto


// PUT /api/comments/:id - Editar comentario
router.put('/:id',
    //Validaciones
    [],
    //Controlador
    commentHttp.commentPut
)

// DELETE /api/comments/:id - Eliminar comentario
router.delete('/:id',
    //Validaciones
    [],
    //Controlador
    commentHttp.commentDelete
)

export default router