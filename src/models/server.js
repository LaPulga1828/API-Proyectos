import express from 'express';
import cors from 'cors'
import { dbConnection } from '../database/config.js'
//importar todos los archivos de las rutas
import userRoutes from '../routes/user.js';
import authRoutes from '../routes/auth.js';
import projectRoutes from '../routes/project.js';
import taskRoutes from '../routes/task.js';
import categoryRoutes from '../routes/category.js';
import commentRoutes from '../routes/comment.js';
import roleRoutes from '../routes/rol.js';
import stateRoutes from '../routes/state.js';
import aiRoutes from '../routes/ai.js';


class Server{
    constructor(){
        this.app=express();
        this.connectarDB()
        this.middlewares()
        this.routes()
    }
    async connectarDB(){
        await dbConnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        
    }
    routes(){
        //aqui toca llamar todos los archivos d rutas
        this.app.use('/api/auth', authRoutes);
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/projects', projectRoutes);
        this.app.use('/api/tasks', taskRoutes);
        this.app.use('/api/categories', categoryRoutes);
        this.app.use('/api/comments', commentRoutes);
        this.app.use('/api/roles', roleRoutes);
        this.app.use('/api/states', stateRoutes);
        this.app.use('/api/ai', aiRoutes);
    }
    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`Servidor corriendo el puerto ${process.env.PORT

            }`);
            
        })
    }
}

export {Server}