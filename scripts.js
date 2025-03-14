var WhoNow = "O";
var Procent = 1;
var Opacity = 1;
var Correctly = new Array;
var Full = new Array;
var Combination = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
];

Main();

function Main(){
  FadeOut();
  Click();
}
function Click(){
  var Elements = document.querySelectorAll("button");
        Elements.forEach((Button, Index) => {
            Button.addEventListener("click", () => {
                while(true){
                  if(document.querySelectorAll("span")[Index +1].innerHTML !="")
                    break;
                  document.querySelectorAll("span")[Index + 1].innerHTML = WhoNow;
                  document.body.classList.toggle("Red");
                  Full = [];
                  if (WhoWin(WhoNow)) {
                    NewGame(false);
                  }
                  else{
                    for (var i = 1;i < 10;i++){
                      if(document.querySelectorAll("span")[i].innerHTML != "")
                        Full.push(true);
                      else
                        Full.push(false);
                    }
                    if(Full.every(function(x){return x == true;})){
                      NewGame(true);
                    }
                  }
                  if(WhoNow == "O")
                    WhoNow = "X";
                  else
                  WhoNow = "O";
                  break;
                }
            });
        });
}
function FadeOut() {
  var Element = document.getElementById("Glava");
  if (Opacity > 0) {
    Opacity -= 0.005;
    Element.style.opacity = Opacity;
    requestAnimationFrame(FadeOut);
  }
}
function WhoWin(WhoNow){
  for(var i=0;i <8;i++){
    Correctly = [];
    for(var q=0;q <3;q++){
      if(document.querySelectorAll("span")[Combination[i][q]].innerHTML == WhoNow){
        Correctly.push(true);
      }else 
        Correctly.push(false);
    }
    //проверка на победу
    if (Correctly.every(function(x){return x == true;}))
      return true;
    
  }
  return false;
}
function NewGame(Draw){
  document.getElementById("Glava").innerHTML = Draw == true ? "ничья" : `Победитель: ${WhoNow}`;
  document.getElementById("Glava").style.opacity = 1;
  for (var i = 1;i < 10;i++){
    document.querySelectorAll("span")[i].innerHTML = "";
  }
  document.getElementById("Glava").style.color = WhoNow == "O" ? "rgb(53, 155, 155)" : "rgb(147, 44, 44)";
  document.getElementById("Glava").style.opacity = 1;
  Opacity = 1;
  FadeOut();
}