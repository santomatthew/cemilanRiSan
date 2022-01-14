import express from 'express';
import db from './config/db.js';
import posting from './models/posting.js';
import router from './routers/router.js'
import cors from 'cors'


try {
    await db.authenticate()
    await posting.sync()
    
    console.log('Database connected......')
} catch (error) {
    
}


const app = express()
const Port = 6999;

app.use(express.json())
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(router)

app.listen(Port,()=>{
    console.log('connectedd....')
})