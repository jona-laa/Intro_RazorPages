const audio = new Audio('../sound/click_sound.wav');

const swap = (col, row) => {
    const white = document.querySelector('.tile_1');
    const toggleAudio = document.querySelector('#toggle_audio');
    const around = [
        document.getElementById(`c${col}r${row - 1}`), document.getElementById(`c${col + 1}r${row}`), document.getElementById(`c${col}r${row + 1}`), document.getElementById(`c${col - 1}r${row}`)
    ];

    if (event.target !== white) {
        around.map((e) => {
            if (e !== null && e.className === 'tile_1') {
                e.className = event.target.className;
                event.target.className = 'tile_1';
                if (toggleAudio.checked) {
                    audio.play();
                }
            }
        });
    }
};

const shuffle = () => {
    for (let row = 1; row <= 4; row++) {
        for (let col = 1; col <= 4; col++) {
            const row2 = Math.floor(Math.random() * 4 + 1);
            const col2 = Math.floor(Math.random() * 4 + 1);
            const temp = document.querySelector(`#c${col}r${row}`).className;
            document.querySelector(`#c${col}r${row}`).className = document.querySelector(`#c${col2}r${row2}`).className;
            document.querySelector(`#c${col2}r${row2}`).className = temp;
        }
    }
};

const toggleSound = () => {
    const toggleAudio = document.querySelector('#toggle_audio');
    if (toggleAudio.checked === true) {
        audio.play();
    }
}

shuffle();