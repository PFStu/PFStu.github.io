
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
let theme = 'light';
document.getElementById('themeToggle').addEventListener('click', () => {
    if (theme === 'light') {
        document.body.classList.toggle('dark-theme');
        let theme = 'dark';
    }else{
        document.body.classList.toggle('light-theme');
        let theme = 'light';
    }
});
function copyqq(){
    navigator.clipboard.writeText("929578771");
    alert("QQ号已复制到粘贴板");
}

