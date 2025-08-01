import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String },
    isActive: { type: Boolean },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});

export default mongoose.model("Category", categorySchema);

/* tengo sueño */