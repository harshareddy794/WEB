var b1click=document.querySelector(".button1")
var b2click=document.querySelector(".button2")
var resetclick=document.querySelector(".reset")
var p1display=document.getElementById("p1display")
var p2display=document.getElementById("p2display")
var inp=document.querySelector("input")
var dis=document.querySelector("p span")
var p1score=0
var p2score=0
var winscore=5
var win=false
b1click.addEventListener("click",function(){
    if(!win){
        p1score++
        p1display.textContent=p1score
        if(p1score===winscore){
            win=true
            p1display.classList.add("winner")
        }
    }
});
b2click.addEventListener("click",function(){
    if(!win){
        p2score++
        p2display.textContent=p2score
        if(p2score===winscore){
            win=true
            p2display.classList.add("winner")
        }
    }
});

resetclick.addEventListener("click",reset)

function reset(){
    p1score=0
    p2score=0
    win=false
    p1display.textContent=p1score
    p2display.textContent=p2score
    p1display.classList.remove("winner")
    p2display.classList.remove("winner")
}
inp.addEventListener("change",function(){
    winscore=Number(this.value)
    dis.textContent=this.value
    reset()
})