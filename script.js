// script.js
function toggleCard() {
    const card = document.querySelector('.card');
    const audio = document.getElementById('birthdaySong');
    const balloonContainer = document.querySelector('.balloon-container');

    // Toggle kelas aktif dan mainkan audio
    card.classList.toggle('active');
    if (card.classList.contains('active')) {
        audio.play();
        generateBalloons();
    } else {
        audio.pause();
        audio.currentTime = 0;
        balloonContainer.innerHTML = ''; // Hapus balon saat kartu ditutup
    }
}

function generateBalloons() {
    const balloonContainer = document.querySelector('.balloon-container');
    balloonContainer.innerHTML = ''; // Reset balon

    // Buat 20 balon yang muncul melayang
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        // Tentukan posisi awal acak dan warna balon
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`; // Warna acak

        // Tambahkan balon ke kontainer
        balloonContainer.appendChild(balloon);

        // Hapus balon setelah animasi selesai
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }
}
