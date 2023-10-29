const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')

require('dotenv').config();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../html/index.html"));
});
router.post("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../html/index.html"));
});
module.exports = router;