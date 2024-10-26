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

function scrollDotMove() {
    let dot = document.getElementById("scrollDot");
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = window.innerHeight;
    let bodyHeight = document.body.scrollHeight;
    let scrollPercent = (scrollTop / (bodyHeight - windowHeight)) * 100;
    dot.style.top = (scrollPercent * 0.95) + "%";
}

window.addEventListener("scroll", scrollDotMove);

document.querySelectorAll(".titlebox").forEach(function(titlebox) {
    titlebox.addEventListener("mousemove", function(event) {
        const rect = titlebox.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        const tiltX = (yPercent - 50) * 0.5;
        const tiltY = (xPercent - 50) * -0.5;
        titlebox.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    titlebox.addEventListener("mouseout", function() {
        titlebox.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    });
});
