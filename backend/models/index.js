import User from "./UserModel.js";
import Posting from "./Posting.js";


User.hasMany(Posting)

export default User;