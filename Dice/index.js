var randomnum1 = Math.floor(Math.random()*6)+1;
var randomnum2 = Math.floor(Math.random()*6)+1;
var randomimg1 = "dice"+randomnum1+".png";
var replacement1 = "images/"+randomimg1;
var randomimg2 = "dice"+randomnum2+".png";
var replacement2 = "images/"+randomimg2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",replacement1);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",replacement2);

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="Player-1 Wins";
}
else if(randomnum1==randomnum2){
    document.querySelector("h1").innerHTML="It's a tie";
}
else{
    document.querySelector("h1").innerHTML="Player-2 Wins";
}
// alert("working");