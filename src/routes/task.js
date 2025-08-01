import {Router} from 'express'
import taskHttp from "../controllers/";
const router=Router()

//Estas dos estan las rutas de project
// GET /api/projects/:projectId/tasks - Listar tareas del proyecto
// POST /api/projects/:projectId/tasks - Crear tarea


// GET /api/tasks/:id - Obtener tarea específica
router.get('/:id',
    //Validaciones
    [],
    //Controlador
    taskHttp.taskGetId
)

// PUT /api/tasks/:id - Actualizar tarea
router.put('/:id',
    //Validaciones
    [],
    //Controlador
    taskHttp.taskPut
)

// DELETE /api/tasks/:id - Eliminar tarea
router.delete('/:id',
    //Validaciones
    [],
    //Controlador
    taskHttp.taskDelete
)

// PUT /api/tasks/:id/status - Cambiar estado de tarea
router.put('/:id/status',
    //Validaciones
    [],
    //Controlador
    taskHttp.taskPutStatus
)

// PUT /api/tasks/:id/assign - Asignar tarea a usuario
router.put('/:id/assign',
    //Validaciones
    [],
    //Controlador
    taskHttp.taskPutAssign
)

// GET /api/tasks/my-tasks - Tareas asignadas al usuario X
router.get('/my-tasks',
    //Validaciones
    [],
    //Controlador
    taskHttp.taskGetTask
)

export default router