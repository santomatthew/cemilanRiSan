import DB from '../config/db.js';
import { Sequelize } from 'sequelize';

const {DataTypes} = Sequelize;

const Posting = DB.define('status',{
    title : {
        type : DataTypes.STRING
    },
    img_url : {
        type : DataTypes.STRING
    },
    bahan : {
        type : DataTypes.TEXT
    }
    ,
    caption : {
        type : DataTypes.TEXT
    }
},{
    freezeTableName : true
})

export default Posting;