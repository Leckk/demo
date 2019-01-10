document.getElementById("Start").addEventListener("click",function(){
if(document.getElementById("start-left").textContent=="HELLO"){
  document.getElementById("start-left").textContent=""
  document.getElementById('Start').textContent="Start";
}
else {
    document.getElementById("start-left").textContent="HELLO";
    document.getElementById('Start').textContent="Stop";
}
}
)
