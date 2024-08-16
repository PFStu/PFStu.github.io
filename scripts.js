setInterval(function(){
    let min = new Date().getMinutes();
    let hours = new Date().getHours();
    let time = hours + ":" + min;
    document.getElementById("clock").innerHTML = time;
})
