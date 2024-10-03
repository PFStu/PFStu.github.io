const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const menuItems = navLinks.querySelectorAll('.nav-links li');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// 原始中文和英文文本
const originalTexts = [
    '主页',
    '关于',
    '项目',
    '工具',
    '资源',
    '软件'
];

const englishTexts = [
    'Home',
    'About',
    'Proj',
    'Tools',
    'Res',
    'Soft'
];

menuItems.forEach((item, index) => {
    const link = item.querySelector('a');
    const originalText = originalTexts[index];
    const englishText = englishTexts[index];

    // 设置悬浮时的效果
    item.addEventListener('mouseenter', () => {
        link.classList.add('hidden');
        setTimeout(() => {
            link.textContent = englishText;
            link.classList.remove('hidden');
        }, 300); // 等待过渡完成后再切换文本
    });

    // 鼠标移开时变回中文
    item.addEventListener('mouseleave', () => {
        link.classList.add('hidden');
        setTimeout(() => {
            link.textContent = originalText;
            link.classList.remove('hidden');
        }, 300); // 等待过渡完成后再切换文本
    });
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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表单提交
    
    const message = encodeURIComponent(document.getElementById('message').value);
    const email = 'mc_bow@outlook.com';
    const subject = '留言内容';
    const body = `留言内容：${message}`;
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink; // 跳转到邮箱
});
