const light_mode = document.getElementById("light");
const dark_mode = document.getElementById("dark");

function toggleTheme(isDark) {
    if (isDark) {
        light_mode.style.filter = 'invert(100%)';
        dark_mode.style.display = 'none';
        light_mode.style.display = 'block';
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        light_mode.style.display = 'none';
        dark_mode.style.display = 'block';
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}

function setInitialTheme() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleTheme(isDarkMode);
}
setInitialTheme();
setTimeout(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
        toggleTheme(e.matches);
    });
}, 2000);


light_mode.addEventListener('click', function () {
    light_mode.style.display = "none";
    dark_mode.style.display = "block";
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    document.body.style.transition = " 1s";
});

dark_mode.addEventListener('click', function () {
    dark_mode.style.display = "none";
    light_mode.style.display = "block";
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    document.body.style.transition = " 1s";
    light_mode.style.filter = 'invert(100%)';
});
// For the mobile stuff >>
const mobile_light_mode = document.getElementById("mobile-light");
const mobile_dark_mode = document.getElementById("mobile-dark");

function toggleTheme_mobile(isDark) {
    if (isDark) {
        mobile_light_mode.style.filter = 'invert(100%)';
        mobile_dark_mode.style.display = 'none';
        mobile_light_mode.style.display = 'block';
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        mobile_light_mode.style.display = 'none';
        mobile_dark_mode.style.display = 'block';
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}

function setInitialTheme_mobile() {
    const isDarkMode_mobile = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleTheme_mobile(isDarkMode_mobile);
}
setInitialTheme_mobile();

mobile_light_mode.addEventListener('click', function () {
    mobile_light_mode.style.display = "none";
    mobile_dark_mode.style.display = "block";
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    document.body.style.transition = " 1s";
});

mobile_dark_mode.addEventListener('click', function () {
    mobile_dark_mode.style.display = "none";
    mobile_light_mode.style.display = "block";
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    document.body.style.transition = " 1s";
    mobile_light_mode.style.filter = 'invert(100%)';
});
