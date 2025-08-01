import {Router} from 'express'
import stateHttp from "../controllers/";
const router=Router()

// GET /api/states/projects - Estados disponibles para proyectos
router.get('/projects',
    //Validaciones
    [],
    //Controlador
    stateHttp.stateGetProjects
)

// GET /api/states/task - Estados disponibles para tareas
router.get('/task',
    //Validaciones
    [],
    //Controlador
    stateHttp.stateGetTask
)

// POST /api/states - Crear nuevo estado (Admin)
router.post('/',
    //Validaciones
    [],
    //Controlador
    stateHttp.statePost
)

// PUT /api/states/:id - Actualizar estado (Admin)
router.put('/:id',
    //Validaciones
    [],
    //Controlador
    stateHttp.statePut
)

export default router