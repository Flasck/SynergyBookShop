require("dotenv").config()
const fileUpload = require("express-fileupload")
const sequelize = require("./db")
const express = require("express")
const router = require("./routes/indexRouter")
const cors = require("cors")

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use("/", router)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log(`The server was started on port = ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

start()
