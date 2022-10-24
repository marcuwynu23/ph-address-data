require("dotenv").config()
const express = require('express');
const cors = require('cors');

const controller = require('./controller');

const app = express();
app.use(cors());


app.get('/', controller.HOME);
app.use("/api/v1/ph/regions", controller.REGIONS)
app.use("/api/v1/ph/provinces", controller.PROVINCES)
app.use("/api/v1/ph/citymun", controller.CITYMUNS)
app.use("/api/v1/ph/barangays", controller.BARANGAYS)


app.listen((process.env.PORT), process.env.ADDR, () => {
	console.log("Server is running on " + process.env.ADDR + ":" + process.env.PORT);
})