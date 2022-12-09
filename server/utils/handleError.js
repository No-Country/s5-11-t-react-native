const handleHttpError = (res, message, statusCode) => {
    res.status(statusCode)
    res.send({error: message});
  }
  
  module.exports = { handleHttpError }