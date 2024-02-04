const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();

const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the React app
app.use(express.static("public"));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI);

// Define Mongoose schema for contact form data
const applicationFormSchema = new mongoose.Schema({
    name: String,
    email: String,
    contactNo: String,
    linkedinLink: String,
    ideaName: String,
    startupSiteLink: String,
    fbPageLink: String,
    streamCategory: String,
    domainType: String,
    problem: String,
    solution: String,
    cofounderDetails: String,
    hasMVP: String,
    pitchDeckFileLink: String,
    productDemoLink: String,
    expectedSupport: String,
});

// Create Mongoose model
const ApplicationForm = mongoose.model(
    "ApplicationForm",
    applicationFormSchema
);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle contact form submissions
app.post("/apply", async (req, res) => {
    const newApplication = new ApplicationForm({
        name: req.body.name,
        email: req.body.email,
        contactNo: req.body.contactNo,
        linkedinLink: req.body.linkedinLink,
        ideaName: req.body.ideaName,
        startupSiteLink: req.body.startupSiteLink,
        fbPageLink: req.body.fbPageLink,
        streamCategory: req.body.streamCategory,
        domainType: req.body.domainType,
        problem: req.body.problem,
        solution: req.body.solution,
        cofounderDetails: req.body.cofounderDetails,
        hasMVP: req.body.hasMVP,
        pitchDeckFileLink: req.body.pitchDeckFileLink,
        productDemoLink: req.body.productDemoLink,
        expectedSupport: req.body.expectedSupport,
    });

    try {
        const application = await newApplication.save();
        return res.status(200).send(application);
    } catch (err) {
        return res.status(500).send(err);
    }
});

// Route to fetch all contact form submissions
app.get("/api/v1/applicants", async (req, res) => {
    try {
        const applicants = await ApplicationForm.find({});
        return res.status(200).send(applicants);
    } catch (err) {
        return res.status(500).send(err);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
