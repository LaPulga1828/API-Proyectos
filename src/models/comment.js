import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    editedAt: { type: Date },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});

export default mongoose.model("Comment", commentSchema);