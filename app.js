const express = require("express");
const app = express();

const port = 5002;
// app.get("/", (req, res) => {
  //   res.render("./");
  // });

//  const userRouter = require("./routes/route");
//  app.use("/", userRouter);

  reqTime = (req, res, next) => {
  let currentDate = new Date();
 console.log( currentDate.getHours())
 // console.log(req.originaURL, currentDate.getDay());
  if (
    currentDate.getHours() > 2
   
    // currentDate.getHours() < 17 &&
    // currentDate.getDay() > 0 &&
    // currentDate.getDay() < 6
  ) { res.sendFile(__dirname+'/views/Close.html')}
  else
    next();
};
  app.use(express.static('views'))

  app.listen(port,(err)=>{ err? console.log(err) : console.log('running') })