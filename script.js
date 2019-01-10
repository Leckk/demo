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

document.getElementById("Contact").addEventListener("click",function(){
if(document.getElementById("header").textContent=="David Leo & PE"){
  document.getElementById("header").textContent=""
  document.getElementById('Contact').textContent="Contact";
}
else {
    document.getElementById("header").textContent="David Leo & PE";
    document.getElementById('Contact').textContent="Clear";
}
}
)
