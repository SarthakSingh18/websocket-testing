const express = require("express");
const app = express();
app.use(express.json());
const socketR = require("./routes/socketRoute");
app.use("/",socketR);

app.listen(5000, ()=>{
    console.log("listening on 5000");
})