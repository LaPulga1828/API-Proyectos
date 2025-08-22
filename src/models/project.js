import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [memberSchema],
    status: { type: Schema.Types.ObjectId, ref: 'State' },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High', 'Critical'],
        default: 'Medium'
    },
    startDate: { type: Date },
    endDate: { type: Date },
    estimatedHours: { type: Number, default: 0 },
    actualHours: { type: Number, default: 0 },
    budget: { type: Number, default: 0 },
    isActive: { type: Boolean },
    tags: [{ type: String }],
    createdAt: { type: Date },
    updatedAt: { type: Date }
});

export default mongoose.model("Project", projectSchema);
