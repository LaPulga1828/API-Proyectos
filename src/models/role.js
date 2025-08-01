import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    _id: {type:mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String},
    isActive: { type: Boolean },
    createdAt:{ type: Date },
    updatedAt:{ type: Date },
});

module.exports = mongoose.model('Role', roleSchema);