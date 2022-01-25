import posting from "./posting.js";
import User from "./usermodel.js";

const Relation = User.hasMany(posting,{foreignKey:"user_id"})

export default Relation;