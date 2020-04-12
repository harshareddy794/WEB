var express=require("express")
var app=express()
app.set("view engine","ejs")

var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}))

var posts=[
    {title: "Cyber security" ,name: "Harsha"},
    {title: "IOT" ,name: "sai ram"},
    {title: "web developement" ,name: "NP"},
    {title: "Python" ,name: "Mithil"}
]
 
app.get("/",function(req,res){
    res.render("home")
})

app.get("/hello/:name",function(req,res){
    var nm=req.params.name
    res.render("sayhello",{namevar:nm})
})

app.get("/posts",function(req,res){  
    res.render("posts",{posts_data:posts})

})

app.post("/addpost",function(req,res){
    var Newauthor=req.body.author
    var Newtitle=req.body.title
    posts.push({name: Newauthor, title: Newtitle})
    res.redirect("/posts")
})

app.get("*",function(req,res){
    res.send("Page not found!")
})

app.listen(3000,"127.0.0.1",function(){
    console.log("APP is listining at 127.0.0.1 at port 3000")
})
