import { Sequelize } from "sequelize";


const db = new Sequelize('cemilan_risan','root','',{
    host : 'localhost',
    dialect : 'mysql'
})


export default db;