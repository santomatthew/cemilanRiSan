import { Sequelize } from "sequelize";
import db from "../config/db.js";


const {DataTypes} = Sequelize;

const posting = db.define('captions',{
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    bahan : {
        type : DataTypes.STRING,
        allowNull : false
    },
    caption : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    img_url :{
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    freezeTableName : true
})


export default posting;