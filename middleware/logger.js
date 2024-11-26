const logger =  (req,res, next) => {
  console.warn(`${req.method} request to ${req.url}. Time: [${new Date().toString()}]`);
  next()
}

export default logger