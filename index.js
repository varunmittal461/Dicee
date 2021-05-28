var randomNo1 = randonGenerator();
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNo1 + ".png");
var randomNo2 = randonGenerator();
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNo2 + ".png");
if(randomNo1===randomNo2){
  document.querySelector("h1").innerHTML="Draw";


}
else if(randomNo1>=randomNo2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins";

}
else if(randomNo1<=randomNo2){
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";

}
function randonGenerator() {
  return Math.floor((Math.random() * 6) + 1);
}
function refreshPage(){
window. location. reload();
}
