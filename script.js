MakeBubble(50);
function MakeBubble(box) 
{
for (let i = 0; i < box; i++) 
{
    var col=getRandomColor();
    var btn = document.createElement("button");
    btn.id="bubble"+i+"";
    btn.className="bubble"
    btn.style="background-color:"+col;
    document.body.appendChild(btn);
}
}

let score=0;
for(i=1; i<=30; i++)
{
let id = "bubble"+i;
document.getElementById(id).onclick = evt=>{

    if(evt.target.style.visibility = 'hidden')
    {
       score+=1;
       
       console.log(score);
       
    }
    document.getElementById('score_final').innerHTML = score;

}}

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function()
 {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds == 0) clearInterval(countdown);
     if (seconds === 0) { alert("TimeOut Your score -> "+ score );}
}, 1000);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  