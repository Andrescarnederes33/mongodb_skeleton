require("dotenv").config();
const path = require("path");
const express = require("express");
const webpack = require('webpack');
const morgan = require("morgan");
const { mongoose } = require("./models/database");
const app = express();

const config = require('../webpack.config.js');
const compiler = webpack(config);

const { PORT, ENV } = process.env;

// Settings
if (ENV === "development") {
	console.log('----Developer config----');
	// Dile a express que use el webpack-dev-middleware y use el webpack.config.js
	// archivo de configuración como base.

	app.use(require("webpack-dev-middleware")(compiler, {
	    publicPath: config.output.publicPath
	}));

	app.use(require("webpack-hot-middleware")(compiler));

} else {

	console.log('----Production config----');
	app.use(express.static(path.join(__dirname, "public")));
}

app.set("port", PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/users.routes"))

// Files


// Starting the server
app.listen(PORT , () => {
	console.log(`Listen on port: ${PORT}`);
});