var timer = 60;
var hitrn = 0;
var score = 0;


function bubbleMekar(){
    var clutter = "";
    for(var i=1; i<=180; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div id="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter
}

function hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function runTimer(){
    var timerint = setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#timeval").textContent=timer;
        } else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h2>`;
        }
    }, 2000);
}

function Iscore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;

}


document.querySelector("#pbtm").addEventListener("click",function (dets) {
  var  clickednum = Number(dets.target.textContent);
  if(clickednum === hitrn){
  
  runTimer();
  bubbleMekar();
  hit();
  Iscore()
  }
});

runTimer();
bubbleMekar();
hit();



