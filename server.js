const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(express.json());
app.use(morgan('combined'));
const socketR = require("./routes/socketRoute");
app.use("/",socketR);

app.listen(5000, ()=>{
    console.log("listening on 5000");
})