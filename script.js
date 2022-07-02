var launch = new Date(2022, 07, 29, 23, 59, 59).getTime();
var modal = document.getElementById("subscribe-modal");
var subscribe = document.getElementById("subscribe");                                                                                
var closebutton = document.getElementById("closebutton");                                                                                

function timer(){
    var now = new Date().getTime()

    var difms = launch - now

    var days = String(Math.floor(difms % (1000 * 60 * 60 * 24 * 31) / (1000 * 60 * 60 * 24)))   .padStart(2, "0");
    var hours = String(Math.floor((difms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))  .padStart(2, "0");
    var minutes = String(Math.floor((difms % (1000 * 60 * 60)) / (1000 * 60)))  .padStart(2, "0");
    var seconds = String(Math.floor((difms % (1000 * 60)) / 1000))  .padStart(2, "0");

    document.getElementById("time").innerHTML = days + " : " + hours + " : " + minutes + " : "+ seconds;
};

setInterval(timer, 1000);

subscribe.addEventListener('click', function(){
    modal.style.display ="block";
});

closebutton.addEventListener('click', function(){
    modal.style.display ="none";
});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};