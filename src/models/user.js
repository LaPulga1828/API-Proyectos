import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
    phone: { type: String },
    globalRole: { type: mongoose.Schema.Types.ObjectId,ref:"Role", required: true },
    isActive: { type: Boolean },
    isEmailVerified: { type: Boolean },
    lastLogin: { type: Date },
    createdAt: { type: Date },
});

/* esto es para encriptar y comprobar la contraseña xd */
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", userSchema)