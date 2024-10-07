
window.onload = function(){
    document.getElementById("board").style.display = "none";
    document.getElementsByClassName("filter")[0].style.display = "none";
    showBoard();
}

function showBoard() {
    const lastShown = localStorage.getItem('boardLastShown');
    const currentTime = new Date().getTime();

    if (!lastShown || (currentTime - parseInt(lastShown)) > 30 * 24 * 60 * 60 * 1000) {
        document.getElementById("board").style.display = "block";
        document.getElementsByClassName("filter")[0].style.display = "block";
        localStorage.setItem('boardLastShown', currentTime);
    }
}

function closeboard() {
    document.getElementById("board").style.display = "none";
    document.getElementsByClassName("filter")[0].style.display = "none";
}

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let theme = localStorage.getItem('theme') || 'light';

document.body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
if (theme === 'dark') {
    document.getElementById("title").innerHTML = "Have a good night";
    document.getElementById("themeToggle").innerHTML = "🌙";
} else {
    document.getElementById("title").innerHTML = "Enjoy your day";
    document.getElementById("themeToggle").innerHTML = "☀️";
}
document.getElementById('themeToggle').addEventListener('click', () => {
    if (theme === 'light') {
        document.getElementById("title").innerHTML = "Have a good night";
        document.getElementById("themeToggle").innerHTML = "🌙";
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        theme = 'dark';
    } else {
        document.getElementById("title").innerHTML = "Enjoy your day";
        document.getElementById("themeToggle").innerHTML = "☀️";
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        theme = 'light';
    }
    
    localStorage.setItem('theme', theme);
});
function copyqq(){
    navigator.clipboard.writeText("929578771");
    alert("QQ号已复制到粘贴板");
}

window.onload = function(){
    setInterval(timeupdate, 1000);
}

function timeupdate() {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let time = hour + ":" + min + ":" + sec;
    document.getElementById("time").innerHTML = time;
}
