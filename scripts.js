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
        body.style.background = "linear-gradient(-125deg, rgb(72, 61, 139), rgb(75, 2, 130), rgb(0, 0, 139), rgb(0, 50, 0), rgb(32, 32, 0))";
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



let isOpen = false;
    
function toggleAnnouncements() {
    const announcements = document.getElementById('announcements');
    if (isOpen) {
        announcements.style.maxHeight = '0';
    } else {
        announcements.style.maxHeight = '200px'; // 根据内容高度调整
    }
    isOpen = !isOpen;
}

function getHoliday(date) {
    const holidays = {
        '01-01': '元旦🎁',
        '01-10': '110宣传日👮‍♂️',
        '01-27': '国际大屠杀纪念日',
        '01-08': '周恩来逝世纪念日',
        '01-26': '国际海关日',
        '02-13': '国际无线电日',
        '02-17': '国际穿山甲日',
        '02-20': '世界社会公正日',
        '02-24': '元宵节',
        '02-04': '世界抗癌日',
        '02-19': '邓小平逝世纪念日',
        '02-14': '情人节💖',
        '03-05': '学雷锋纪念日',
        '03-07': '女生节👩',
        '03-11': '龙抬头',
        '03-12': '植树节',
        '03-15': '消费者权益日',
        '03-21': '国际海豹日',
        '03-21': '世界森林日',
        '03-22': '世界水日',
        '03-23': '世界气象日',
        '03-24': '世界防治结核病日',
        '04-06': '世界卫生日',
        '04-22': '世界地球日',
        '04-23': '世界图书和版权日',
        '05-01': '劳动节',
        '05-04': '青年节',
        '05-05': '五一劳动节',
        '05-21': '劳动节',
        '05-31': '端午节',
        '06-01': '儿童节',
        '07-01': '建党节',
        '08-01': '建军节',
        '09-10': '教师节',
        '09-03': '抗日战争胜利纪念日',
        '09-22': '国际熊猫节',
        '04-01': '愚人节🤣',
        '05-01': '劳动节🙌',
        '09-18': '918事变 铭记历史',
        '10-01': '国庆节 China',
        '12-25': '圣诞节[Merry Christmas]🎄'
    };

    const formattedDate = date.toISOString().slice(5, 10); // 获取 MM-DD 格式
    return holidays[formattedDate] || '';
}

function displayHoliday() {
    const today = new Date();
    const holiday = getHoliday(today);
    const holidayElement = document.getElementById('holiday');
    
    if (holiday) {
        holidayElement.textContent = `今天是 ${today.toLocaleDateString()}，节日：${holiday}`;
    } else {
        holidayElement.textContent = `今天是 ${today.toLocaleDateString()}，没有节日。`;
    }
}

window.onload = function() {
    displayHoliday();
    setInterval(displayHoliday, 1000 * 60 * 60); // 每小时更新一次节日
}
