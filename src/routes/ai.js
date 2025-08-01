import {Router} from 'express'
import aiHttp from "../controllers/";
const router=Router()

// POST /api/ai/generate-tasks - Generar tareas automáticamente basadas en descripción del proyecto
router.post('/generate-tasks',
    //Validaciones
    [],
    //Controlador
    aiHttp.aiPostTask
)

// POST /api/ai/analyze-project - Análisis y sugerencias de mejora para el proyecto
router.post('/analyze-project',
    //Validaciones
    [],
    //Controlador
    aiHttp.aiPostAnalyze
)

// POST /api/ai/estimate-time - Estimación de tiempo para completar tareas
router.post('/estimate-time',
    //Validaciones
    [],
    //Controlador
    aiHttp.aiPostTime
)

// POST /api/ai/generate-summary - Generar resumen del progreso del proyecto
router.post('/generate-summary',
    //Validaciones
    [],
    //Controlador
    aiHttp.aiPostSummary
)

// POST /api/ai/suggest-improvements - Sugerencias basadas en comentarios y estados
router.post('/suggest-improvements',
    //Validaciones
    [],
    //Controlador
    aiHttp.aiPostImprovements
)

export default router
