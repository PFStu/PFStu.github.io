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
let frameCount = 0;
let fps = 0;

function updateFPS() {
    fps = frameCount;
    document.getElementById("fps").textContent = "FPS: " + fps;
    frameCount = 0;
}

function incrementFrame() {
    frameCount++;
}

// 每秒钟更新一次FPS
setInterval(updateFPS, 1000);

// 每帧调用一次incrementFrame
requestAnimationFrame(function tick() {
    incrementFrame();
    requestAnimationFrame(tick);
});

function toggleTheme(button) {
    button.classList.toggle('active');
    const body = document.body;
    const bgColor = window.getComputedStyle(body).backgroundImage;
    if (bgColor === "linear-gradient(-125deg, rgb(153, 170, 0), rgb(102, 153, 102), rgb(41, 128, 185), rgb(153, 102, 204), rgb(153, 0, 204))"){
        body.style.background = "linear-gradient(-125deg, rgb(72, 61, 139), rgb(75, 2, 130), rgb(0, 0, 139), rgb(0, 90, 0), rgb(128, 128, 0))";
    }else{
        body.style.background = "linear-gradient(-125deg, rgb(153, 170, 0), rgb(102, 153, 102), rgb(41, 128, 185), rgb(153, 102, 204), rgb(153, 0, 204))"
    }
}
async function measureDownloadSpeed() {
    const fileSize = 1024 * 1024 * 5; // 5MB
    const downloadUrl = `https://httpbin.org/bytes/${fileSize}`;

    // 测量下载速度
    const downloadStartTime = performance.now();
    const downloadResponse = await fetch(downloadUrl);
    const downloadBlob = await downloadResponse.blob();
    const downloadEndTime = performance.now();
    const downloadTime = (downloadEndTime - downloadStartTime) / 1000; // 转换为秒
    const downloadSpeed = (fileSize / downloadTime) / 1024 / 1024; // 转换为Mbps

    const downloadButton = document.getElementById('ds');
    downloadButton.textContent = `↓: ${downloadSpeed.toFixed(2)} Mbps`;
    downloadButton.classList.add('active');
}

async function measureUploadSpeed() {
    const fileSize = 1024 * 1024 * 5; // 5MB
    const uploadUrl = 'https://httpbin.org/post';
    const uploadData = new ArrayBuffer(fileSize);

    // 测量上传速度
    const uploadStartTime = performance.now();
    const uploadResponse = await fetch(uploadUrl, {
        method: 'POST',
        body: uploadData
    });
    const uploadEndTime = performance.now();
    const uploadTime = (uploadEndTime - uploadStartTime) / 1000; // 转换为秒
    const uploadSpeed = (fileSize / uploadTime) / 1024 / 1024; // 转换为Mbps

    const uploadButton = document.getElementById('us');
    uploadButton.textContent = `↑: ${uploadSpeed.toFixed(2)} Mbps`;
    uploadButton.classList.add('active');
}

setInterval(function() {
    measureDownloadSpeed();
    measureUploadSpeed();
}, 3000);


