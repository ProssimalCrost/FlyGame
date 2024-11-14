function tocarAudioAoCarregar() {
    document.addEventListener('DOMContentLoaded', function() {
         const audio = new Audio('game_over_song.mp3');
         audio.loop = true;
         
         audio.play().catch(error => {
              console.log('Erro ao reproduzir o áudio:', error);
         });
    });
}

tocarAudioAoCarregar();
