import express from "express";
import DB from "./config/db.js";
import router from "./routers/index.js";

try {
    await DB.authenticate();
    console.log('Database Connected');
} catch (error) {
    
}



const App = express();
const PORT = 8007;


App.use(router);
App.use(express.json());

App.listen(PORT,()=>{
    console.log('CONNECTED....!!');
});
