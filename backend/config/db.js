import { Sequelize } from "sequelize";

const DB = new Sequelize('recipesh','root','',{
    host: 'localhost',
    dialect : 'mysql'
})

export default DB;