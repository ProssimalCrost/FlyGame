var altura = 0
var largura = 0
var vidas = 1

function TamanhoAutomatico() { 
     altura= window.innerHeight
     largura= window.innerWidth

     console.log(altura, largura)
}

TamanhoAutomatico()

function posicaoRandomica() {

     if (document.getElementById('mosquito')) {
          document.getElementById('mosquito').remove();
      
          if (vidas > 3) {
              window.location.href = 'fim_de_jogo.html';
          } else {
              document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
              vidas++;
          }
      }
      

     var posicaoX = Math.floor(Math.random() * largura) - 90
     var posicaoY = Math.floor(Math.random() * altura) - 90

     posicaoX = posicaoX < 0 ? 0 : posicaoX
     posicaoY = posicaoY < 0 ? 0 : posicaoY

     console.log(posicaoX, posicaoY)

     var mosquito = document.createElement('img')
     mosquito.src = 'imagens/mosca.png'
     mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
     mosquito.style.left = posicaoX + 'px'
     mosquito.style.top = posicaoY + 'px'
     mosquito.style.position = 'absolute'
     mosquito.id = 'mosquito'
     mosquito.onclick = function() {
          this.remove()
     }

     document.body.appendChild(mosquito)
}
function tamanhoAleatorio() {
     var classe = Math.floor(Math.random() *  3)
     console.log(classe)

     switch(classe) {
          case 0:
               return 'mosquito1'
          case 1:
               return 'mosquito2'
          case 2:
               return 'mosquito3'
     }
}
function ladoAleatorio() {
     var classe = Math.floor(Math.random() *  2)
     console.log(classe)

     switch(classe) {
          case 0:
               return 'ladoA'
          case 1:
               return 'ladoB'

     }
}
function BotaoSom() {
     document.addEventListener('DOMContentLoaded', function() {
          const audio = new Audio('Audio/game_song.mp3');
          audio.loop = true;
          let isPlaying = false;

          document.getElementById('toggleAudio').addEventListener('click', function() {
               const muteIcon = document.querySelector('.Volume');
               const volumeIcon = document.querySelector('.SemVolume');
               if (isPlaying) {
                    audio.pause();
                    isPlaying = false;
                    volumeIcon.style.display = 'block';
                    muteIcon.style.display = 'none';
               } else {
                    audio.play();
                    isPlaying = true;
                    volumeIcon.style.display = 'none';
                    muteIcon.style.display = 'block';
               }
          });
     });
}

BotaoSom();


