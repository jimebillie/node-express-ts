import express from "express";
const app = express();


app.get("/", (req, res)=>{
    res.send("Hello! billie")
})


app.listen(1998, ()=>{
    console.log("Server is running...")
})