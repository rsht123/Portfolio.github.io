const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
})

app.listen(3001, () => console.log("App running on port 3001..."));