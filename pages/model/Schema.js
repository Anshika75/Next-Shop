import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
});

export default models.User || model("User", UserSchema);