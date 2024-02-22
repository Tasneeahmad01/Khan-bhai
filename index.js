const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override")


app.use(express.urlencoded({ extended:true }));
app.use(methodOverride("_method"));

app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
    id:uuidv4(),
    username:"Apna College",
    content:"I LOVE U AND CODING",
},
{
    id:uuidv4(),
username:"Apni Family",
    content:"I LOVE U AND CODING",
},
{
    id:uuidv4(),
    username:"Suhail khan",
        content:" AND CODING",
    },
    {
        id:uuidv4(),
        username:"Whenever",
            content:" LOVE U AND CODING",
        },
        {
     id:uuidv4(),
     username:"Sudhir kashiyap",
  content:"I LOVE  AND CODING",
      },
      { 
        id:uuidv4(),
    username:"Khan Academy",
    content:"I LOVE My India",
     },  
     {
        id:uuidv4(),
  username:"Apna School",
     content:"Lorem Ispum for request",
 },
]


app.get("/posts",(req,res)=>{
 res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let { username,content } =req.body;
    let {id}=uuidv4();
    console.log(id);
    posts.push({id,username,content}); 
    res.redirect("/posts"); 
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    console.log(post);
    posts.push(post);
    res.render("show.ejs",{post});
}); 
//PATCH//
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    console.log(post);
    res.send("Your Request run");
});


app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
   });



app.listen(8080,()=>{
 console.log("Your connection run port 8080")
});

