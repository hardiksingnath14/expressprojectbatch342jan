import express from 'express';
import servera from './servera.js';
import serverb from './serverb.js';
const app = express();
app.set("view engine","ejs");
app.set("views",".");
app.use("/admin",serverb);
app.use("/",servera);
app.listen(3000,()=>{console.log("http://localhost:3000");});