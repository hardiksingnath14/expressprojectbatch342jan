import express from 'express';
const t = express.Router();
t.get("/",(req,res)=>{res.send("<h1>/ or /home url invoked</h1>");});
t.get("/serveic",(req,res)=>{res.send("<h1>service url invoked</h1>");});
t.get("/about",(req,res)=>{res.send("<h1>about url invoked</h1>");});
t.get("/contact",(req,res)=>{res.send("<h1>contact url invoked</h1>");});
t.get("/login",(req,res)=>{res.send("<h1>login url invoked</h1>");});
export default t;

