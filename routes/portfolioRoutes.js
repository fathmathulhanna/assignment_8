const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio");

async function getPortfolio(res) {
    const portfolio = await Portfolio.findOne().lean();

    if (!portfolio) {
        res.status(404).render("error", {
            message: "Portfolio data not found. Please run npm run seed."
        });
        return null;
    }

    return portfolio;
}

router.get("/", async (req, res) => {
    try {
        const portfolio = await getPortfolio(res);
        if (portfolio) res.render("index", { portfolio });
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { message: "Unable to load the home page." });
    }
});

router.get("/about", async (req, res) => {
    try {
        const portfolio = await getPortfolio(res);
        if (portfolio) res.render("about", { portfolio });
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { message: "Unable to load the about page." });
    }
});

router.get("/contact", async (req, res) => {
    try {
        const portfolio = await getPortfolio(res);
        if (portfolio) res.render("contact", { portfolio });
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { message: "Unable to load the contact page." });
    }
});

module.exports = router;
