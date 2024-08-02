export function handleScreenResize() {
    const nav_end = document.querySelector('.navbar-end');
    const lang_btn = document.querySelector('.languages');
    
    if (window.innerWidth <= 760) {
        document.querySelector('header').appendChild(lang_btn);
        document.querySelector('.menu-items').appendChild(nav_end);
    } else {
        nav_end.insertBefore(lang_btn, nav_end.firstChild);
        document.querySelector('.navbar').appendChild(nav_end);
    }
}

