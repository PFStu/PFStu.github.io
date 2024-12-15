document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const festivalContainer = document.createElement('div');
    festivalContainer.id = 'festival-container';
    document.body.appendChild(festivalContainer);

    const style = document.createElement('style');
    style.textContent = `
        #festival-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.05);
        }
        .festival-item {
            position: absolute;
            top: -50px;
            opacity: 0.8;
            animation: fall linear;
            pointer-events: none;
        }
        @keyframes fall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.8;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    const festivals = [
        {
            startMonth: 1,
            startDay: 1,
            endMonth: 1,
            endDay: 2,
            element: '🎈',
            info: '元旦',
            animation: {
                duration: '6s',
                iterations: 'infinite',
                direction: 'normal'
            },
            styles: `
                font-size: 40px;
                color: #FF69B4;
            `
        },
        {
            startMonth: 2,
            startDay: 14,
            endMonth: 2,
            endDay: 15,
            element: '💖',
            info: '情人节',
            animation: {
                duration: '4s',
                iterations: 'infinite',
                direction: 'normal'
            },
            styles: `
                font-size: 40px;
                color: #FF1493;
            `
        },
        {
            startMonth: 3,
            startDay: 8,
            endMonth: 3,
            endDay: 9,
            element: '🌹',
            info: '妇女节',
            animation: {
                duration: '5s',
                iterations: 'infinite',
                direction: 'normal'
            },
            styles: `
                font-size: 40px;
                color: #FF69B4;
            `
        },
        {
            startMonth: 4,
            startDay: 1,
            endMonth: 4,
            endDay: 2,
            element: '🐟',
            info: '愚人节',
            animation: {
                duration: '5s',
                iterations: 'infinite',
                direction: 'normal'
            },
            styles: `
                font-size: 40px;
                color: #FFD700;
            `
        },
        {
            startMonth: 5,
            startDay: 1,
            endMonth: 5,
            endDay: 2,
            element: '🏆',
            info: '劳动节',
            animation: {
                duration: '5s',
                iterations: 'infinite',
                direction: 'normal'
            },
            styles: `
                font-size: 40px;
                color: #32CD32;
            `
        },
        {
            startMonth: 6,
            startDay: 1,
            endMonth: 6,
            endDay: 2,
            element: '🎈',
            info: '儿童节',
            animation: {
                duration: '6s',
                iterations: 'infinite',
                direction: 'normal'
            },
            styles: `
                font-size: 40px;
                color: #FF69B4;
            `
        },
        {
            startMonth: 10,
            startDay: 1,
            endMonth: 10,
            endDay: 2,
            element: '🎉',
            info: '国庆节',
            animation: {
                duration: '5s',
                iterations: 'infinite',
                direction: 'normal'
            },
            styles: `
                font-size: 40px;
                color: #FF4500;
            `
        },
        {
            startMonth: 10,
            startDay: 31,
            endMonth: 11,
            endDay: 1,
            element: '🎃',
            info: '万圣节',
            animation: {
                duration: '5s',
                iterations: 'infinite',
                direction: 'normal'
            },
            styles: `
                font-size: 50px;
                color: #FFA500;
            `
        },
        {
            startMonth: 12,
            startDay: 24,
            endMonth: 12,
            endDay: 26,
            element: '🎄',
            info: '圣诞节',
            animation: {
                duration: '5s',
                iterations: 'infinite',
                direction: 'normal'
            },
            styles: `
                font-size: 50px;
                color: #FF0000;
            `
        },
        {
            startMonth: 12,
            startDay: 31,
            endMonth: 1,
            endDay: 1,
            element: '✨',
            info: '跨年',
            animation: {
                duration: '6s',
                iterations: 'infinite',
                direction: 'normal'
            },
            styles: `
                font-size: 40px;
                color: #00BFFF;
            `
        }
    ];

    const currentFestival = festivals.find(festival => {
        const startDate = new Date(today.getFullYear(), festival.startMonth - 1, festival.startDay);
        const endDate = new Date(today.getFullYear(), festival.endMonth - 1, festival.endDay);
        return today >= startDate && today < endDate;
    });

    if (currentFestival) {
        const animationStyle = `
            @keyframes festival-fall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                    opacity: 1;
                }
            }
        `;
        style.textContent += animationStyle;

        const festivalInfo = document.getElementById('festival-info');
        if (festivalInfo) {
            festivalInfo.innerText = currentFestival.info;
        }

        setInterval(() => {
            const elem = document.createElement('div');
            elem.classList.add('festival-item');
            elem.innerText = currentFestival.element;
            elem.style.left = Math.random() * window.innerWidth + 'px';
            elem.style.fontSize = currentFestival.styles.split('font-size: ')[1].split(';')[0];
            elem.style.color = currentFestival.styles.split('color: ')[1].split(';')[0];
            elem.style.animation = `festival-fall ${currentFestival.animation.duration} ${currentFestival.animation.iterations} ${currentFestival.animation.direction}`;
            festivalContainer.appendChild(elem);
        }, 500);
    }
});
