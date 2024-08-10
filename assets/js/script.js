function openMenu() {
    const ul = document.querySelector('.topNavMenu ul');
    ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.topNavMenu');
    const ul = document.querySelector('.topNavMenu ul');
    const icon = document.querySelector('.icon');
    const iconDisplay = window.getComputedStyle(icon).display;
    if (iconDisplay !== 'none' && !menu.contains(event.target)) { ul.style.display = 'none'; }
});