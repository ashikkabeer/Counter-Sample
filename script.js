let colors = ['#00B81F','#FC7CD8','#FB3100'];
let index = 0;

document.addEventListener('DOMContentLoaded', () => {
    let count = document.getElementById('count');
    let button = document.getElementById('button');

    let num = 1;

    button.addEventListener('click', (e) => {
        count.innerText = num++;

        if (index == colors.length - 1) {
            index = 0;
        } else {
            index++;
        }

        button.style.backgroundColor = colors[index];
        count.style.color = colors[index];
    });
});
