window.onscroll = function() {
    var header = document.querySelector('.sticky-header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};
