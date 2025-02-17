import mongoose, {Schema} from "mongoose";

const UserSchema: Schema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    }
});

export default mongoose.model("User", UserSchema);