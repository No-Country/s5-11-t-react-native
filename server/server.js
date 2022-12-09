const { app } = require("./app")
const { connectDB } = require("./config/database")

const PORT = 4000

const startServer = async () => {

  connectDB()

  app.listen(PORT, () => {

    console.log("server running on PORT:" + PORT)
  })
}

startServer()
