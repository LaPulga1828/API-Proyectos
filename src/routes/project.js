import {Router} from 'express'
import projectHttp from "../controllers/";
import taskHttp from "../controllers/";
import commentHttp from "../controllers/";
const router=Router()

// GET /api/projects - Listar proyectos del usuario
router.get('/',
    //Validaciones
    [],
    //Controlador
    projectHttp.projectGet
)

// POST /api/projects - Crear proyecto
router.post('/',
    //Validaciones
    [],
    //Controlador
    projectHttp.projectPost
)

// GET /api/projects/:id - Obtener proyecto específico
router.get('/:id',
    //Validaciones
    [],
    //Controlador
    projectHttp.projectGetId
)

// PUT /api/projects/:id - Actualizar proyecto
router.put('/:id',
    //Validaciones
    [],
    //Controlador
    projectHttp.projectPut
)

// DELETE /api/projects/:id - Eliminar proyecto
router.delete('/:id',
    //Validaciones
    [],
    //Controlador
    projectHttp.projectDelete
)

// POST /api/projects/:id/members - Agregar miembro al proyecto
router.post('/:id/members',
    //Validaciones
    [],
    //Controlador
    projectHttp.projectPostMembers
)

// DELETE /api/projects/:id/members/:userId - Remover miembro
router.delete('/:id/members/:userId',
    //Validaciones
    [],
    //Controlador
    projectHttp.projectDeleteMembers
)

// PUT /api/projects/:id/status - Cambiar estado del proyecto
router.put('/:id/status',
    //Validaciones
    [],
    //Controlador
    projectHttp.projectPutStatus
)

//Rutas extras de project que tine que verr con las task

// GET /api/projects/:projectId/tasks - Listar tareas del proyecto
router.get('/:projectId/tasks',
    //Validaciones
    [],
    //Controlador
    taskHttp.taskGet
)
// POST /api/projects/:projectId/tasks - Crear tarea
router.post('/:projectId/tasks',
    //Validaciones
    [],
    //Controlador
    taskHttp.taskPost
)

//Rutas extras de project que tine que verr con los comments

// GET /api/projects/:id/comments - Comentarios del proyecto
router.get('/:id/comments',
    //Validaciones
    [],
    //Controlador
    commentHttp.commentGet
)
// POST /api/projects/:id/comments - Comentar en proyecto
router.post('/:id/comments',
    //Validaciones
    [],
    //Controlador
    commentHttp.commentPost
)

export default router