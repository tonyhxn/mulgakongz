const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const faqs = document.querySelectorAll('.faq_container');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})