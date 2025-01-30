const translations = {
    uk: {
        "menu-about": "Про себе",
        "menu-skills": "Навички",
        "menu-contacts": "Контакти",
        "about-title": "Про себе",
        "banner1-title": "Базове навчання",
        "banner1-text": "Мене звуть Валерій. Мені 36 років. Навчався у Національному Авіаційному Університеті за спеціальністю “Комп’ютерні системи та мережі”. У 2005 році закінчив навчання і здобув спеціальність “Інженер комп’ютерних систем та мереж”.",
        "banner2-title": "8+ років у копірайтингу",
        "banner2-text": "З 2011 по 2019 (включно) займався написанням текстів для різноманітних ресурсів. У 2017 році спільно з дружиною запустили свій онлайн магазин дитячого одягу, котрий працював до 2022 року(включно). Займався рекламою у FB, Instagram та Viber.",
        "banner3-title": "Developer",
        "banner3-text": "Пройшов навчання программуванню у спеціалізованій школі OKTEN school (липень 2024 - січень 2025). Закінчив курс за напрямком PythonComplex",
        "skills-title": "Навички",
        "skills-sun": "Навички:",
        "skill-html": "HTML",
        "skill-css": "CSS",
        "skill-js": "Java Script",
        "skill-ts": "Type Script",
        "skill-react": "React.js",
        "skill-next": "Next.js",
        "skill-python": "Python",
        "skill-git": "Git",
        "contacts-title": "Контакти:",
        "footer-copyright": "© Copyright by V.Knyshov Ⓒ Sheild. All Rights Reserved."
    },
    en: {
        "menu-about": "About Me",
        "menu-skills": "Skills",
        "menu-contacts": "Contacts",
        "about-title": "About Me",
        "banner1-title": "Basic Education",
        "banner1-text": "My name is Valerii. I am 36 years old. I studied at the National Aviation University in the specialty “Computer Systems and Networks”. In 2005, I graduated and obtained the specialty “Computer Systems Engineer”.",
        "banner2-title": "8+ years in Copywriting",
        "banner2-text": "From 2011 to 2019 (inclusive), I was engaged in writing texts for various resources. In 2017, together with my wife, we launched an online children's clothing store that operated until 2022 (inclusive). I was involved in advertising on FB, Instagram, and Viber.",
        "banner3-title": "Developer",
        "banner3-text": "I completed programming training at OKTEN school (July 2024 - January 2025). I graduated with the direction PythonComplex",
        "skills-title": "Skills",
        "skills-sun": "Skills:",
        "skill-html": "HTML",
        "skill-css": "CSS",
        "skill-js": "JavaScript",
        "skill-ts": "TypeScript",
        "skill-react": "React.js",
        "skill-next": "Next.js",
        "skill-python": "Python",
        "skill-git": "Git",
        "contacts-title": "Contacts:",
        "footer-copyright": "© Copyright by V.Knyshov Ⓒ Sheild. All Rights Reserved."
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        element.textContent = translations[lang][key];
    });
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('language', lang);
    updateLanguageButtons(lang);
}

function updateLanguageButtons(currentLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(button => {
        button.style.fontWeight = button.getAttribute('data-lang') === currentLang ? 'bold' : 'normal';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let currentBannerIndex = 0;

    function showBanner(index) {
        const banners = document.querySelectorAll('.banner');
        banners.forEach((banner, i) => {
            banner.classList.remove('active');
            if (i === index) {
                banner.classList.add('active');
            }
        });
    }
    setInterval(nextBanner, 10000);

    function nextBanner() {
        const banners = document.querySelectorAll('.banner');
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        showBanner(currentBannerIndex);
    }

    function prevBanner() {
        const banners = document.querySelectorAll('.banner');
        currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
        showBanner(currentBannerIndex);
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const menuLinks = document.querySelectorAll('header ul a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Переключення теми
    const toggleButton = document.querySelector('.theme-toggle');
    toggleButton.addEventListener('click', toggleTheme);

    // Збереження теми у localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateToggleButtonIcon(savedTheme);
    } else {
        // тема за замовчуванням light
        document.documentElement.setAttribute('data-theme', 'light');
        updateToggleButtonIcon('light');
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleButtonIcon(newTheme);
    }

    function updateToggleButtonIcon(theme) {
        const toggleButton = document.querySelector('.theme-toggle');
        toggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // Прив'язка подій до стрілок баннера
    const arrowLeft = document.querySelector('.arrow.left');
    const arrowRight = document.querySelector('.arrow.right');

    arrowLeft.addEventListener('click', prevBanner);
    arrowRight.addEventListener('click', nextBanner);

    // Прив'язка події до кнопки повернення до верху
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    scrollToTopButton.addEventListener('click', scrollToTop);

    // Прив'язка подій до кнопок мови
    const languageButtons = document.querySelectorAll('.lang-btn');
    languageButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Збереження мови у localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        changeLanguage(savedLang);
    } else {
        changeLanguage('uk'); // мова за замовчуванням - українська
    }
});