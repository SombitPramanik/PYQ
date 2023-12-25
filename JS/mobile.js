const mobile_open = document.getElementById("mobile-open");
const mobile_nav = document.getElementById("mobile");
const text = document.getElementById("m_nav");
const mobile_close = document.getElementById("mobile-close");

mobile_open.addEventListener('click', function () {
    mobile_nav.style.display = 'block';
    text.style.opacity = '0';
    text.style.transition = 'opacity .4s ease';
    mobile_close.style.display = 'block';
    mobile_nav.style.transform = 'translateX(0%)';
    mobile_nav.style.transition = 'transform .4s ease';
});

mobile_close.addEventListener('click', function () {
    mobile_nav.style.transform = 'translateX(100%)';
    text.style.opacity = '1';
    mobile_close.style.display = 'none';
    mobile_nav.style.transition = 'transform .4s ease';
});

