
 
function createdivs(){

let con=document.getElementById("container");
for(let i=0;i<400;i++){
    
    let div=document.createElement('div');
    div.style.cssText='width:16px;height:16px;float:left;box-sizing:border-box';
div.addEventListener("mouseenter",function(){
    div.style.backgroundColor="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
})
con.appendChild(div);
}
 }

 
 
 
let btn1=document.getElementsByClassName("btn1");
btn1[0].addEventListener("click",function(){
    let cont=document.getElementById("container");
let di=cont.getElementsByTagName("div");
    for(let i=0;i<di.length;i++){
di[i].style.backgroundColor="";
    }
})
 

 
let btn2=document.getElementsByClassName("btn2");
btn2[0].addEventListener("click",function(){
    
    let input=prompt("Enter No of blocks per side between 1 to 30");

if(input>0&&input<=30){
    let cont=document.getElementById("container");
    cont.replaceChildren();
let wid=320/input;
console.log(wid);
for(let i=0;i<(input*input);i++){
    
    let div=document.createElement('div');
    div.style.cssText='width:'+wid+'px;height:'+wid+'px;float:left;box-sizing:border-box';

div.addEventListener("mouseenter",function(){
    div.style.backgroundColor="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
})
cont.appendChild(div);
}}
})
 

 window.onload=createdivs();
