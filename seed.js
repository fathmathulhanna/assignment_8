require("dotenv").config();

const mongoose = require("mongoose");
const Portfolio = require("./models/Portfolio");

const portfolioData = {
    name: "Fathimathul Hanna P",
    role: "Software Development Student",
    intro: "I am a software development student who enjoys creating websites and learning new technologies.",
    about: [
        "Hello! I am Fathimathul Hanna P, a software development student with an interest in web development and programming.",
        "I completed my Bachelor of Vocation in Software Development from Farook College, Kozhikode. Currently, I am pursuing my Master of Vocation in Software Development at Cochin University of Science and Technology (CUSAT).",
        "I enjoy learning new technologies and developing simple and useful applications. I am particularly interested in web development and software development."
    ],
    education: [
        {
            course: "M.Voc in Software Development",
            institution: "Cochin University of Science and Technology (CUSAT), Kochi",
            status: "Currently Pursuing"
        },
        {
            course: "B.Voc in Software Development",
            institution: "Farook College (Autonomous), Kozhikode",
            status: "Completed"
        }
    ],
    skills: ["HTML", "CSS", "JavaScript", "Java", "PHP", "MySQL"],
    contact: {
        email: "fathimathulhannap77@gmail.com",
        phone: "+91 77367 12877",
        location: "Kozhikode, India",
        message: "If you would like to get in touch with me, feel free to send me a message."
    }
};

async function insertData() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        await Portfolio.findOneAndUpdate(
            {},
            portfolioData,
            { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true }
        );

        console.log("Portfolio data inserted/updated successfully.");
    } catch (error) {
        console.error("Error inserting portfolio data:", error.message);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

insertData();
