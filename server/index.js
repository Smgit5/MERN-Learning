const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://smDb05:vMVFUGAuuXFya0sV@cluster0.kiqknkk.mongodb.net/merntutorial?retryWrites=true&w=majority&appName=AtlasApp");

app.get("/getUsers", async (req, res) => {
    try {
        const result = await UserModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001, () => console.log("Server is now running!"));