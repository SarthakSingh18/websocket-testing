const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    console.log(req.body);
    res.send({"hello":"world"});
})

router.post("/", (req,res)=>{
    console.log("SERVING POST");
    console.log(req);
    res.send();
})
module.exports = router;
