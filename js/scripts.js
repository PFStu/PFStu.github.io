const currentURI = window.location.href;
if (currentURI === "https://www.pfstu.ct.ws/devtool/index.html" || currentURI === "https://www.pfstu.ct.ws/devtool/" || currentURI === "https://pfstu.netlify.app/devtool/index.html" || currentURI === "https://pfstu.netlify.app/devtool/") {

document.getElementById('clearLocalStorage').onclick = function() {
    localStorage.clear();
    displayOutput('localStorage 已清空');
};

document.getElementById('checkDomain').onclick = function() {
    const domain = window.location.hostname;
    displayOutput('当前域名是: ' + domain);
};

document.getElementById('readLocalStorage').onclick = function() {
    let output = 'localStorage 内容:\n';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        output += `${key}: ${value}\n`;
    }
    displayOutput(output);
};

document.getElementById('readCookies').onclick = function() {
    const cookies = document.cookie;
    displayOutput('Cookies 内容: ' + cookies);
};

document.getElementById('deleteLocalStorage').onclick = function() {
    const key = document.getElementById('deleteKey').value;
    if (key in localStorage) {
        localStorage.removeItem(key);
        displayOutput(`已删除 localStorage 中的键: ${key}`);
    } else {
        displayOutput(`键: ${key} 不存在于 localStorage`);
    }
    document.getElementById('deleteKey').value = '';
};

document.getElementById('showTime').onclick = function() {
    const localTime = new Date();
    const utcTime = new Date(localTime.toUTCString());
    const offsetInMilliseconds = localTime.getTime() - utcTime.getTime();

    const output = `
        当前 UTC 时间: ${utcTime.toISOString().replace('T', ' ').substring(0, 19)}
        当前本地时间: ${localTime.toISOString().replace('T', ' ').substring(0, 19)}
        偏差: ${offsetInMilliseconds} 毫秒
    `;
    displayOutput(output);
};

function displayOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.style.display = 'block';
    outputDiv.textContent = message;
}
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
    localStorage.setItem('theme', 'dark');
    document.getElementById("themeToggle").innerHTML = "🌙";
    document.querySelectorAll('.layer1, .layer2, .layer3').forEach(layer => {
        layer.style.backgroundImage = "url('../img/mount_dark.svg')";
    });    
} else {
    document.getElementById("title").innerHTML = "Enjoy your day";
    localStorage.setItem('theme', 'light');
    document.getElementById("themeToggle").innerHTML = "☀️";
    document.querySelectorAll('.layer1, .layer2, .layer3').forEach(layer => {
        layer.style.backgroundImage = "url('../img/mount_light.svg')";
    });    
}
document.getElementById('themeToggle').addEventListener('click', () => {
    if (theme === 'light') {
        document.getElementById("title").innerHTML = "Have a good night";
        document.getElementById("themeToggle").innerHTML = "🌙";
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-theme');
        theme = 'dark';
        document.querySelectorAll('.layer1, .layer2, .layer3').forEach(layer => {
            layer.style.backgroundImage = "url('../img/mount_dark.svg')";
        });    
    } else {
        document.getElementById("title").innerHTML = "Enjoy your day";
        document.getElementById("themeToggle").innerHTML = "☀️";
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        document.body.classList.add('light-theme');
        theme = 'light';
        document.querySelectorAll('.layer1, .layer2, .layer3').forEach(layer => {
            layer.style.backgroundImage = "url('../img/mount_light.svg')";
        });    
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

document.documentElement.style.setProperty('--primary-color', localStorage.getItem('primaryColor') || '#0077cc');
document.documentElement.style.setProperty('--secondary-color', getSimilarColor(localStorage.getItem('primaryColor') || '#0077cc'));
            document.documentElement.style.setProperty('--secondary-color', getSimilarColor(localStorage.getItem('primaryColor') || '#0077cc'));
            document.documentElement.style.setProperty('--hover-color', getSimilarColor(localStorage.getItem('primaryColor') || '#0077cc'));
            document.documentElement.style.setProperty('--tertiary-color', getSimilarColor(localStorage.getItem('primaryColor') || '#0077cc'));
            document.documentElement.style.setProperty('--border-color', getSimilarColor(localStorage.getItem('primaryColor') || '#0077cc'));

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


fetch('notices/notices.txt')
.then(response => response.text())
.then(data => {
    noticeContainer.innerHTML = '';
    const notices = data.split('\n').slice(0, 6);
    notices.forEach(notice => {
        const [content, date] = notice.split('$');
        const noticeItem = document.createElement('div');
        noticeItem.className = 'notice';
        const noticeText = document.createElement('p');
        noticeText.className = 'notice-text text';
        noticeText.textContent = content;
        const noticeDate = document.createElement('p');
        noticeDate.className = 'notice-date text';
        noticeDate.textContent = date;
        noticeItem.appendChild(noticeText);
        noticeItem.appendChild(noticeDate);
        noticeContainer.appendChild(noticeItem);
    });
})
.catch(error => console.error('读取公告文件时出错:', error));


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

loadTrack();

document.addEventListener('DOMContentLoaded', function() {
    const colorItems = document.querySelectorAll('.color-select-item');

    colorItems.forEach(item => {
        item.addEventListener('click', function() {
            const primaryColor = this.style.backgroundColor;
            document.documentElement.style.setProperty('--primary-color', primaryColor);
            localStorage.setItem('primaryColor', primaryColor);
            const secondaryColor = getSimilarColor(primaryColor);
            document.documentElement.style.setProperty('--secondary-color', secondaryColor);
            document.documentElement.style.setProperty('--hover-color', secondaryColor);
            document.documentElement.style.setProperty('--tertiary-color', secondaryColor);
            document.documentElement.style.setProperty('--border-color', secondaryColor);
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

const currentDate = new Date();

const websiteStartDate = new Date('2024-01-01');
const studioStartDate = new Date('2022-08-22');
function calculateDaysDifference(startDate) {
    const diffTime = currentDate - startDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
const websiteDays = calculateDaysDifference(websiteStartDate);
const studioDays = calculateDaysDifference(studioStartDate);
const targetDate2024 = new Date('2024-01-01');
const targetDate2023 = new Date('2023-08-01');
const daysUntil2024 = calculateDaysDifference(targetDate2024);
const daysUntil2023 = calculateDaysDifference(targetDate2023);
document.getElementById('website-days').textContent = websiteDays;
document.getElementById('studio-days').textContent = studioDays

document.addEventListener('DOMContentLoaded', function() {
    const noticeContainer = document.getElementById('noticeContainer');
    const loadButton = document.getElementById('loadButton');
    const body = document.body;
    body.addEventListener('mousemove', function(event) {
        const rect = body.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const offsetX1 = (mouseX / rect.width) * 10 - 5;
        const offsetY1 = (mouseY / rect.height) * 5 - 2.5;
        const offsetX2 = (mouseX / rect.width) * 20 - 10;
        const offsetY2 = (mouseY / rect.height) * 10 - 5;
        const offsetX3 = (mouseX / rect.width) * 30 - 15;
        const offsetY3 = (mouseY / rect.height) * 15 - 7.5;
        document.querySelector('.layer1').style.backgroundPosition = `${offsetX1}px ${offsetY1}px`;
        document.querySelector('.layer2').style.backgroundPosition = `${offsetX2}px ${offsetY2}px`;
        document.querySelector('.layer3').style.backgroundPosition = `${offsetX3}px ${offsetY3}px`;
    });

    loadButton.addEventListener('click', function() {
        fetch('notices/notices.txt')
            .then(response => response.text())
            .then(data => {
                noticeContainer.innerHTML = '';
                const notices = data.split('\n').slice(0, 6);
                notices.forEach(notice => {
                    const [content, date] = notice.split('$');
                    const noticeItem = document.createElement('div');
                    noticeItem.className = 'notice';
                    const noticeText = document.createElement('p');
                    noticeText.className = 'notice-text text';
                    noticeText.textContent = content;
                    const noticeDate = document.createElement('p');
                    noticeDate.className = 'notice-date text';
                    noticeDate.textContent = date;
                    noticeItem.appendChild(noticeText);
                    noticeItem.appendChild(noticeDate);
                    noticeContainer.appendChild(noticeItem);
                });
            })
            .catch(error => console.error('读取公告文件时出错:', error));
    });
});

document.getElementById('clearLocalStorage').onclick = function() {
    localStorage.clear();
    displayOutput('localStorage 已清空');
};

document.getElementById('checkDomain').onclick = function() {
    const domain = window.location.hostname;
    displayOutput('当前域名是: ' + domain);
};

document.getElementById('readLocalStorage').onclick = function() {
    let output = 'localStorage 内容:\n';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        output += `${key}: ${value}\n`;
    }
    displayOutput(output);
};
