import express from 'express';
import cors from 'cors'
import { dbConnection } from '../database/config.js'
//inportar todos los archivos de las rutas
import User from '../models/user.js'


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
        this.app.use('/api/users',User)
    }
    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`Servidor corriendo el puerto ${process.env.PORT

            }`);
            
        })
    }
}

export {Server}