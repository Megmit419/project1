var random_number1=Math.floor(Math.random()*6)+1;
var random_number2=Math.floor(Math.random()*6)+1;
var img1= "images/dice"+random_number1+".png";
var img2= "images/dice"+random_number2+".png";


document.querySelectorAll("img")[0].setAttribute("src",img1);

document.querySelectorAll("img")[1].setAttribute("src", img2);

if(random_number1>random_number2){
    document.getElementById("h1").innerHTML="Player1 wins";
}
else if(random_number1<random_number2){
    document.getElementById("h1").innerHTML="Player2 wins";
}
else{
    document.getElementById("h1").innerHTML="Draw";
}