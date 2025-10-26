document.addEventListener('DOMContentLoaded', function() {

    // --- 1. 亮色/暗色模式切换 (Theme Toggle) ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        htmlElement.classList.add(currentTheme);
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            htmlElement.classList.add('dark-mode');
        }
    }

    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark-mode');
        if (htmlElement.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });

    // --- 2. 鼠标光标跟随光效 (Cursor Light Effect) ---
    const heroSection = document.querySelector('.hero-section');
    const cursorLight = document.getElementById('cursor-light');

    heroSection.addEventListener('mousemove', (e) => {
        cursorLight.style.left = e.clientX + 'px';
        cursorLight.style.top = e.clientY + 'px';
    });

    heroSection.addEventListener('mouseenter', () => {
        cursorLight.style.opacity = 1;
    });

    heroSection.addEventListener('mouseleave', () => {
        cursorLight.style.opacity = 0;
    });

    // --- 3. 动态副标题 (Dynamic Subtitle) ---
    const dynamicSubtitle = document.getElementById('dynamic-subtitle');
    const subtitles = {
        zh: ["一名开发者", "一位设计师", "一个终身学习者", "一位旅行爱好者"],
        en: ["A Developer", "A Designer", "A Lifelong Learner", "A Travel Enthusiast"]
    };
    let subtitleIndex = 0;

    const updateSubtitle = (lang) => {
        const currentSubtitles = subtitles[lang] || subtitles.zh;
        dynamicSubtitle.style.opacity = 0;

        setTimeout(() => {
            subtitleIndex = (subtitleIndex + 1) % currentSubtitles.length;
            dynamicSubtitle.textContent = currentSubtitles[subtitleIndex];
            dynamicSubtitle.style.opacity = 1;
        }, 500);
    };

    // --- 4. 语言切换模块 (Language Toggle) ---
    const languageData = {
        zh: {
            pageTitle: "Miao's World",
            navLogo: "Miao's World",
            navHome: "主页",
            navResume: "简历",
            navProjects: "项目",
            navNotes: "笔记",
            navFootprints: "足迹",
            heroTitle: "欢迎来到Miao的世界",
            aboutTitle: "关于我",
            aboutDesc: "你好，我是Miao。一名热衷于探索技术与设计的开发者/设计师/创造者。我相信代码可以构建世界，而设计赋予其灵魂。在这里，我记录下我的思考、创造与脚步，希望与你分享这份旅程。",
            projectTitle: "我的项目",
            projectDesc: "从代码到产品，这里是我将想法变为现实的地方。",
            projectLink: "了解更多 &rarr;",
            notesTitle: "精选笔记",
            notesDesc: "记录学习的点滴，沉淀知识的深度与广度。",
            notesLink: "开始阅读 &rarr;",
            footprintsTitle: "我的足迹",
            footprintsDesc: "用镜头和文字，捕捉世界每个角落的精彩瞬间。",
            footprintsLink: "探索世界 &rarr;",
            hobbiesTitle: "兴趣与热情",
            musicTitle: "音乐",
            musicDesc: "赵雷, 王菲, Taylor Swift, Lorde, Billie Eilish, Kendrick Lamar",
            travelTitle: "旅行",
            travelDesc: "探索世界的脚步 &rarr;",
            photoTitle: "摄影",
            photoDesc: "捕捉光影的瞬间 &rarr;",
            investTitle: "价值投资",
            investDesc: "阅读相关的思考 &rarr;",
            resumePageTitle: "简历 | Miao's World",
            sidebarAbout: "关于",
            sidebarEducation: "教育",
            sidebarSkills: "技能",
            sidebarAwards: "获奖",
            sidebarProjects: "项目",
            myName: "Miao",
            myTitle: "前端开发者 & UI/UX 设计师",
            myLocation: "中国, 上海",
            myEmail: "your.email@example.com",
            chatHeader: "与我的 AI 分身聊聊",
            chatPlaceholder: "你好！想了解 Miao 的更多信息吗？比如他的项目经验或技术栈？请在这里问我吧！",
            chatInputPlaceholder: "输入您的问题...",
            chatSend: "发送",
            educationTitle: "教育背景",
            edu1Degree: "计算机科学与技术硕士",
            edu1School: "某某大学",
            edu1Date: "2022 - 2025",
            edu1Desc: "主修方向：人机交互、数据可视化。以 GPA 3.9/4.0 的成绩毕业。毕业设计是关于构建一个基于 Web 的协作式数据分析平台。",
            edu2Degree: "软件工程学士",
            edu2School: "某某大学",
            edu2Date: "2018 - 2022",
            edu2Desc: "多次获得校级奖学金。活跃于开源社区，为多个项目贡献了代码。担任过院系技术部部长。",
            skillsTitle: "专业技能",
            skillsCat1: "编程与技术",
            skillsCat2: "设计与工具",
            skillsCat3: "语言",
            langCN: "中文 (母语)",
            langEN: "英语 (专业工作水平, CET-6)",
            awardsTitle: "获奖情况",
            award1: "国家奖学金 (Top 1%) - 2021",
            award2: "全国大学生“挑战杯”竞赛省级金奖 - 2020",
            award3: "某某公司 Hackathon 竞赛优胜奖 - 2019",
            projectsTitle: "项目经历",
            proj1Title: "个人作品集网站 (Miao's World)",
            proj1Desc: "一个展示个人作品、学习笔记和生活足迹的响应式网站。实现了亮色/暗色模式、中英文切换、动态交互等功能，注重设计细节和用户体验。",
            proj2Title: "协作式数据分析平台",
            proj2Desc: "一个允许多人实时在线协作处理和可视化数据的Web应用。我主要负责前端架构设计和核心可视化组件的开发，实现了画布拖拽、实时同步等复杂功能。",
            navArchives: "笔记",
            archivesTitle: "笔记归档",
            archivesDesc: "所有思考与学习的沉淀",
        },
        en: {
            pageTitle: "Miao's World",
            navLogo: "Miao's World",
            navHome: "Home",
            navResume: "Resume",
            navProjects: "Projects",
            navNotes: "Notes",
            navFootprints: "Footprints",
            heroTitle: "Welcome to Miao's World",
            aboutTitle: "About Me",
            aboutDesc: "Hello, I'm Miao. A developer/designer/creator passionate about exploring technology and design. I believe code builds the world, and design gives it a soul. Here, I document my thoughts, creations, and journeys, hoping to share them with you.",
            projectTitle: "My Projects",
            projectDesc: "From code to product, this is where I turn ideas into reality.",
            projectLink: "Learn More &rarr;",
            notesTitle: "Selected Notes",
            notesDesc: "Documenting the details of my studies to deepen and broaden my knowledge.",
            notesLink: "Start Reading &rarr;",
            footprintsTitle: "My Footprints",
            footprintsDesc: "Capturing the wonderful moments from every corner of the world with my camera and words.",
            footprintsLink: "Explore the World &rarr;",
            hobbiesTitle: "Interests & Passions",
            musicTitle: "Music",
            musicDesc: "Zhao Lei, Faye Wong, Taylor Swift, Lorde, Billie Eilish, Kendrick Lamar",
            travelTitle: "Travel",
            travelDesc: "Explore the world &rarr;",
            photoTitle: "Photography",
            photoDesc: "Capture moments in light &rarr;",
            investTitle: "Value Investing",
            investDesc: "Read related thoughts &rarr;",
            resumePageTitle: "Resume | Miao's World",
            sidebarAbout: "About",
            sidebarEducation: "Education",
            sidebarSkills: "Skills",
            sidebarAwards: "Awards",
            sidebarProjects: "Projects",
            myName: "Miao",
            myTitle: "Frontend Developer & UI/UX Designer",
            myLocation: "Shanghai, China",
            myEmail: "your.email@example.com",
            chatHeader: "Chat with my AI Assistant",
            chatPlaceholder: "Hello! Want to know more about Miao? Ask me about his project experience or tech stack here!",
            chatInputPlaceholder: "Type your question...",
            chatSend: "Send",
            educationTitle: "Education",
            edu1Degree: "Master of Computer Science & Technology",
            edu1School: "XX University",
            edu1Date: "2022 - 2025",
            edu1Desc: "Major in Human-Computer Interaction and Data Visualization. Graduated with a GPA of 3.9/4.0. The graduation project was about building a web-based collaborative data analysis platform.",
            edu2Degree: "Bachelor of Software Engineering",
            edu2School: "XX University",
            edu2Date: "2018 - 2022",
            edu2Desc: "Received multiple university-level scholarships. Active in the open-source community, contributing code to several projects. Served as the head of the department's technology division.",
            skillsTitle: "Skills",
            skillsCat1: "Programming & Tech",
            skillsCat2: "Design & Tools",
            skillsCat3: "Languages",
            langCN: "Chinese (Native)",
            langEN: "English (Professional Working Proficiency, CET-6)",
            awardsTitle: "Awards",
            award1: "National Scholarship (Top 1%) - 2021",
            award2: "Provincial Gold Medal, 'Challenge Cup' National College Student Competition - 2020",
            award3: "Winner Prize, XX Company Hackathon - 2019",
            projectsTitle: "Projects",
            proj1Title: "Personal Portfolio Website (Miao's World)",
            proj1Desc: "A responsive website to showcase personal projects, study notes, and life footprints. Features include dark/light mode, EN/ZH language switching, dynamic interactions, with a focus on design details and user experience.",
            proj2Title: "Collaborative Data Analysis Platform",
            proj2Desc: "A web application that allows multiple users to process and visualize data in real-time collaboration. I was mainly responsible for the frontend architecture design and the development of core visualization components, implementing complex features like canvas drag-and-drop and real-time synchronization.",
            navArchives: "Archives",
            archivesTitle: "Note Archives",
            archivesDesc: "A collection of all thoughts and studies.",
        }
    };
    const langLinks = document.querySelectorAll('.nav-language a');
    let subtitleInterval;

    const switchLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (languageData[lang] && languageData[lang][key]) {
                if (element.tagName === 'TITLE') {
                    element.textContent = languageData[lang][key];
                } else {
                    element.innerHTML = languageData[lang][key];
                }
            }
        });

        document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';

        langLinks.forEach(link => {
            link.classList.toggle('lang-active', link.getAttribute('data-lang') === lang);
        });

        localStorage.setItem('preferredLanguage', lang);

        clearInterval(subtitleInterval);
        updateSubtitle(lang);
        subtitleInterval = setInterval(() => updateSubtitle(lang), 3000);
    };

    langLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            switchLanguage(this.getAttribute('data-lang'));
        });
    });

    // --- 5. 页面加载初始化 (Initialization) ---
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'zh';
    switchLanguage(preferredLanguage);

    // --- 6. 滚动效果模块 (Scroll Effects) ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    const fadeInElements = document.querySelectorAll('.fade-in-element');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

});