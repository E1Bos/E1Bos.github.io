document.querySelectorAll('.pro-container').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('pro-container--active');
        button.getElementsByClassName("pro-content")[0].classList.toggle('pro-content--active');
        document.getElementsByClassName("all-pros")[0].classList.toggle('all-pros--hidden');
        document.body.classList.toggle('body--overflow');
    });
});
