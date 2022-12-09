const path = require("path");


const renderIndex = (req, res, next) => {
  const indexPath = path.join(__dirname, "../..", "public", "index.html")
  res.status(200).sendFile(indexPath)
}

module.exports = { renderIndex };