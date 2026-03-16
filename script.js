// Oyunu açmaq funksiyası
function openGame(url) {
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('gameFrame');
    
    iframe.src = url; // Oyunun linkini iframe-ə yerləşdirir
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Arxa fon sürüşməsin
}

// Oyunu bağlamaq funksiyası
function closeGame() {
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('gameFrame');
    
    iframe.src = ""; // Oyunu dayandır
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Modalın kənarına basanda bağlanması
window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target == modal) {
        closeGame();
    }
}
