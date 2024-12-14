const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let theme = localStorage.getItem('theme') || 'light';

document.body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
if (theme === 'dark') {
    document.getElementById("title").innerHTML = "Have a good night";
    localStorage.setItem('theme', 'dark');
    document.getElementById("themeToggle").innerHTML = "🌙";
} else {
    document.getElementById("title").innerHTML = "Enjoy your day";
    localStorage.setItem('theme', 'light');
    document.getElementById("themeToggle").innerHTML = "☀️";
}
document.getElementById('themeToggle').addEventListener('click', () => {
    if (theme === 'light') {
        document.getElementById("title").innerHTML = "Have a good night";
        document.getElementById("themeToggle").innerHTML = "🌙";
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-theme');
        theme = 'dark';
    } else {
        document.getElementById("title").innerHTML = "Enjoy your day";
        document.getElementById("themeToggle").innerHTML = "☀️";
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        document.body.classList.add('light-theme');
        theme = 'light';
    }
    
    //localStorage.setItem('theme', theme);
});
function copyqq(){
    navigator.clipboard.writeText("929578771");
    alert("QQ号已复制到粘贴板");
}

window.onload = function(){
    setInterval(timeupdate, 1000);
}

function timeupdate() {
    let hour = String(new Date().getHours()).padStart(2, '0');
    let min = String(new Date().getMinutes()).padStart(2, '0');
    let sec = String(new Date().getSeconds()).padStart(2, '0');
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
        titlebox.style.transform = `perspective(250px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    titlebox.addEventListener("mouseout", function() {
        titlebox.style.transform = `perspective(100px) rotateX(0deg) rotateY(0deg)`;
    });
});

const music = document.getElementById('music');
const musicTitle = document.querySelector('.music-title');
const musicBtn = document.querySelector('.music-btn');
const progressBar = document.querySelector('.progress-bar');


musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = '暂停';
    } else {
        music.pause();
        musicBtn.textContent = '播放';
    }
});

music.addEventListener('timeupdate', () => {
    const progress = (music.currentTime / music.duration) * 100;
    progressBar.value = progress;
});


progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * music.duration;
    music.currentTime = seekTime;
});


music.addEventListener('ended', () => {
    musicBtn.textContent = '播放';
    progressBar.value = 0;
});

const tracks = [
    { title: "Phosphor", src: "https://pfstu.netlify.app/music/Phosphor.mp3" },
    { title: "Fading Wind", src: "https://pfstu.netlify.app/music/FadingWind.mp3" },
    { title: "SEPARATION", src: "https://pfstu.netlify.app/music/SEPARATION.mp3" }
];

const musicImgs = [
    { music:"Phosphor", img: "img/Phosphor.jpg" }
    ,{ music:"FadingWind", img: "img/FadingWind.jpg" }
    ,{ music:"SEPARATION", img: "img/SEPARATION.jpg" }
]

let currentTrackIndex = 0;


function loadTrack() {
    document.querySelector('.music-img').src = musicImgs[currentTrackIndex].img;
    music.src = tracks[currentTrackIndex].src;
    musicTitle.textContent = tracks[currentTrackIndex].title;
    music.play();
}

document.querySelector('.music-back-btn').addEventListener('click', () => {
    document.querySelector('.music-img').src = musicImgs[currentTrackIndex].img;
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
        loadTrack();
        musicBtn.textContent = '暂停';
    } else {
        alert("已到达第一首曲目");
    }
});


document.querySelector('.music-next-btn').addEventListener('click', () => {
    document.querySelector('.music-img').src = musicImgs[currentTrackIndex].img;
    if (currentTrackIndex < tracks.length - 1) {
        currentTrackIndex++;
        loadTrack();
        musicBtn.textContent = '暂停';
    } else {
        alert("已到达最后一首曲目");
    }
});



const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;


const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.toggle('dark-theme', currentTheme === 'dark');
}


// themeToggleButton.addEventListener('click', () => {

//     body.classList.toggle('light-theme');

//     if (body.classList.contains('dark-theme')) {
//         localStorage.setItem('theme', 'dark');
//     } else {
//         localStorage.setItem('theme', 'light');
//     }
// });



loadTrack();

document.addEventListener('DOMContentLoaded', function() {
    const colorItems = document.querySelectorAll('.color-select-item');

    colorItems.forEach(item => {
        item.addEventListener('click', function() {
            const primaryColor = this.style.backgroundColor;
            document.documentElement.style.setProperty('--primary-color', primaryColor);
            const secondaryColor = getSimilarColor(primaryColor);
            document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        });
    });
});

function getSimilarColor(color) {
    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length < 3) return color;

    const r = Math.min(255, parseInt(rgb[0]) + 40);
    const g = Math.min(255, parseInt(rgb[1]) + 40);
    const b = Math.min(255, parseInt(rgb[2]) + 40);

    return `rgb(${r}, ${g}, ${b})`;
}