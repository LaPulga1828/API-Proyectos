import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: {
        type: String,
        enum: ['Admin', 'Project Manager', 'Developer', 'Viewer'],
        default: 'Viewer',
        required:true
    },
    description: { type: String },
    isActive: { type: Boolean },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});

export default mongoose.model("Role", roleSchema)