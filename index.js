import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.get("/office", (req,res)=>{
    res.sendFile(__dirname + "/office.html")
});

app.listen(port, () =>{
    console.log(`Listening Port No. ${port}`);
});