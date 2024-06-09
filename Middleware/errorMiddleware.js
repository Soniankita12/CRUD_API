const errorMiddleWare = (err, req, res, next) => {
  console.log("here is an eroor middleware");
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.Node_ENV === "developmemnt" ? err.stack : null,
  });
};

module.exports = errorMiddleWare;
