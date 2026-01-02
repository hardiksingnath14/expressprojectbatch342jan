import express from 'express';
const j = express.Router();
j.use(express.static(("C:/Users/Administrator/Documents/node/NODE")
));
j.get("/",(req,res)=>{res.send("<h1>/or /admin home url invoked</h1>")});
j.get("/adserveic",(req,res)=>{res.send("<h1>admin service url invoked</h1>");});
j.get("/adabout",(req,res)=>{res.send("<h1>admin about url invoked</h1>");});
j.get("/adcontact",(req,res)=>{res.send("<h1>admin contact url invoked</h1>");});
j.get("/adlogin",(req,res)=>{res.render("index1"),console.log("username is :",req.query.username)});

export default j;

