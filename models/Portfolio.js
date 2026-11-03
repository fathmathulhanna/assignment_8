const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        role: { type: String, required: true },
        intro: { type: String, required: true },
        about: [{ type: String }],
        education: [
            {
                course: { type: String, required: true },
                institution: { type: String, required: true },
                status: { type: String, required: true }
            }
        ],
        skills: [{ type: String }],
        contact: {
            email: { type: String, required: true },
            phone: { type: String, required: true },
            location: { type: String, required: true },
            message: { type: String, required: true }
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
