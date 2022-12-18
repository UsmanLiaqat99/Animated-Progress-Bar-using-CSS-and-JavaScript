const progressBars = document.querySelectorAll('.column');

for (let progressBar of progressBars) {

    const circle = progressBar.querySelector('.circle');
    const percent = progressBar.querySelector('.percent');
    const progress = progressBar.querySelector('.progress');

    let progressed = 0;

    const startProgress = () => {

        progressed += 1;

        if (progressed <= progressBar.getAttribute('data-percent')) {
            circle.style.top = progressed + '%';
            progress.style.height = progressed + '%';
            percent.innerHTML = progressed + '%';
        }

        requestAnimationFrame(startProgress);

    }

    requestAnimationFrame(startProgress);

}
