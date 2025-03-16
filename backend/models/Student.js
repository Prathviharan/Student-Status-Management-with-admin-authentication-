const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Activate", "Inactive"],
        default: "Active",
    },
});

module.exports = mongoose.model("Student", studentSchema);