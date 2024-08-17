function formatTime(time) {
    let [hours, minutes] = time.split(':');
    hours = hours.length  === 1 ? '0' + hours : hours;
    minutes = minutes.length  === 1 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`;
}


setInterval(function(){
    let min = new Date().getMinutes();
    let hours = new Date().getHours();
    let time = hours + ":" + min;
    document.getElementById("clock").innerHTML = formatTime(time);
},1000);

let tipslist = ["耐得心头气，方为有志人","强人前有路，弱人前有山","留得青山在，不愁没柴烧","吃得苦中苦，方为人上人","只要功夫深，铁杵磨成针"];


function getRandomTip(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}


window.onload = function(){
    const r = getRandomTip(tipslist);
    window.onload =function(){const t = document.getElementById("t");}
    t["innerHTML"] = r;
}

audio = new Audio("../music/Tek(Sped up).mp3");
audio.play();
audio.playbackRate = 0.825;
