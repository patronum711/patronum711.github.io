document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.resume-section');
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        // 当section的顶部进入视口，或底部离开视口时触发
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 清除所有链接的 active 状态
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // 为当前可见区域对应的链接添加 active 状态
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.sidebar-nav a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});