// 粒子背景配置
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#00ff88', '#0088ff', '#ff0088']
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff88',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 回到顶部按钮
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 导航栏滚动效果
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// 卡片悬停效果增强
const cards = document.querySelectorAll('.feature-card, .use-case, .community-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// 数字动画
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target === Infinity ? '∞' : Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

// 观察器 - 当元素进入视口时触发动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // 如果是统计数字，触发动画
            if (entry.target.classList.contains('stat-number')) {
                const text = entry.target.textContent;
                if (text === '∞') {
                    animateNumber(entry.target, Infinity);
                } else if (text === '0') {
                    animateNumber(entry.target, 0);
                } else {
                    const number = parseInt(text.replace(/[^0-9]/g, ''));
                    if (!isNaN(number)) {
                        entry.target.textContent = '0';
                        animateNumber(entry.target, number);
                    }
                }
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.feature-card, .use-case, .community-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// 下载按钮点击效果
const downloadBtn = document.querySelector('.btn-download');
if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        // 创建涟漪效果
        const ripple = document.createElement('span');
        const rect = downloadBtn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        downloadBtn.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}

// 添加涟漪动画
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 彩蛋：Konami Code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // 触发彩蛋效果
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 恭喜你发现了彩蛋！你已经掌握了JBT-RAMOS的秘密力量！');
        }, 2000);
    }
});

// 彩虹动画
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// 移动端菜单切换
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar .container');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.style.cssText = `
                background: none;
                border: none;
                color: var(--primary-color);
                font-size: 2rem;
                cursor: pointer;
                display: none;
            `;
            
            if (window.innerWidth <= 768) {
                menuToggle.style.display = 'block';
                navMenu.style.display = 'none';
            }
            
            menuToggle.addEventListener('click', () => {
                if (navMenu.style.display === 'none') {
                    navMenu.style.display = 'flex';
                } else {
                    navMenu.style.display = 'none';
                }
            });
            
            navbar.appendChild(menuToggle);
        }
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// 性能优化：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 滚动性能优化
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // 这里可以添加滚动相关的操作
            ticking = false;
        });
        ticking = true;
    }
});

// 控制台彩蛋
console.log('%c🚀 欢迎来到 JBT-RAMOS！', 'color: #00ff88; font-size: 24px; font-weight: bold;');
console.log('%c准备好登上太阳了吗？', 'color: #0088ff; font-size: 16px;');
console.log('%c输入 konami code 试试看... ↑↑↓↓←→←→BA', 'color: #ff0088; font-size: 12px;');

// 页面加载完成提示
window.addEventListener('load', () => {
    console.log('%c✨ JBT-RAMOS 网站加载完成！', 'color: #00ff88; font-size: 14px; font-weight: bold;');
});
