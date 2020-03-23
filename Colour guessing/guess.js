var numsqr=6
var colors=randomColoursGenerator(numsqr)
var pickedcolor=colors[pickcolor()]
var colordisplay=document.querySelector(".colordisplay")
colordisplay.textContent=pickedcolor
var squres=document.querySelectorAll(".squre")
var message=document.querySelector(".message")
var h1=document.querySelector("h1")
var resetbutton=document.querySelector(".button")
var easybtn=document.querySelector("#easybtn")
var hardbtn=document.querySelector("#hardbtn")

easybtn.addEventListener("click",function(){
    easybtn.classList.add("selected")
    hardbtn.classList.remove("selected")
    h1.style.backgroundColor="steelblue"
    message.textContent=""
    numsqr=3
    colors=randomColoursGenerator(numsqr)
    pickedcolor=colors[pickcolor()]
    for(var i=0;i<squres.length;i++){
        if(colors[i]){
            squres[i].style.backgroundColor=colors[i]}
        else{
            squres[i].style.display="none"
        }
    }
})

hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected")
    easybtn.classList.remove("selected")
    h1.style.backgroundColor="steelblue"
    message.textContent=""
    numsqr=3
    colors=randomColoursGenerator(numsqr)
    pickedcolor=colors[pickcolor()]
    for(var i=0;i<squres.length;i++){
        squres[i].style.backgroundColor=colors[i]
        squres[i].style.display="block"
    }
})

resetbutton.addEventListener("click",function(){
    colors=randomColoursGenerator(numsqr)
    pickedcolor=colors[pickcolor()]
    h1.style.backgroundColor="steelblue"
    message.textContent=""
    colordisplay.textContent=pickedcolor
    for(var i=0;i<squres.length;i++){
        squres[i].style.backgroundColor=colors[i]
    } 
    resetbutton.textContent="New colours"
})

for(var i=0;i<squres.length;i++){
    squres[i].style.backgroundColor=colors[i]
    squres[i].addEventListener("click",function(){
     var clickedcolor=this.style.backgroundColor
        if(clickedcolor===pickedcolor){
            message.textContent="Correct" 
            h1.style.backgroundColor=pickedcolor
            resetbutton.textContent="New game"
            changeall() 
        }
        else{
            this.style.backgroundColor="black";
            message.textContent="Try again"
        }   
    });
}

function pickcolor(){
var color=Math.floor(Math.random()*colors.length)
return color
}

function changeall(){
    for(var i=0;i<squres.length;i++){
    squres[i].style.backgroundColor=pickedcolor}
}

function randomColoursGenerator(num){
    var arr=[]
    for(i=0;i<num;i++){
        arr.push(genrateColour())
    }
    return arr
}

function genrateColour(){
    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)
    return ("rgb("+r+", "+g+", "+b+")")
}

