const switchInput = document.querySelector('#darkModeSwitch');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('darkmode');
    switchInput.checked = true;
}
document.querySelector('#darkModeSwitch').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('darkmode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('darkmode');
        localStorage.setItem('theme', 'light');
    }
});