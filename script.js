document.querySelectorAll('.face').forEach(face => {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        face.appendChild(cell);
    }
});

document.querySelectorAll('.face div').forEach(cell => {
    cell.addEventListener('click', () => {
        const color = prompt('Enter color (red, green, blue, yellow, orange, white):');
        cell.style.backgroundColor = color;
    });
});
