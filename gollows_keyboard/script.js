document.querySelectorAll('.key').forEach(element => {
    element.addEventListener('click', function (e) {
        document.querySelector('.placeholder').textContent += e.target.textContent;
    })
});