import mongoose from "mongoose";

const stateSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String },
    type: {
        type: String,
        enum: ['Project', 'Task'],
        required: true
    },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


export default mongoose.model("State", stateSchema);
