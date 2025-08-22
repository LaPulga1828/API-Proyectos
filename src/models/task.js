import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    description: { type: String },
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: Schema.Types.ObjectId, ref: 'State' },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High', 'Critical'],
        default: 'Medium'
    },
    estimatedHours: { type: Number, default: 0 },
    actualHours: { type: Number, default: 0 },
    startDate: { type: Date },
    dueDate: { type: Date },
    completedAt: { type: Date },
    tags: [{ type: String }],
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


export default mongoose.model("Task", taskSchema);
