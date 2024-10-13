document .addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const themetoggle = document.getElementById('theme-toggle');

    function toggleTheme() {
        body.classList.toggle('dark-theme');

        if(body.classList.contains('dark-theme')){
            themetoggle.textContent = 'Light';
        } else {
            themetoggle.textContent = 'Dark';
        }
    }

    themetoggle.addEventListener('click', toggleTheme)
});
