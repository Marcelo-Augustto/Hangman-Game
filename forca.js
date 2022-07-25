let vidas = 6;
let letrasChutadas = [];
let palavra = [];

class Forca {

  constructor(palavra) {
    this.palavraSecreta = palavra;
  }

  chutar(letra) {
    this.replaceEmptySpace();
    letra = letra.toLowerCase();
    if(letra.length == 1 && this.palavraSecreta.indexOf(letra) == -1 && letrasChutadas.indexOf(letra) == -1) {
          vidas -= 1;
          letrasChutadas.push(letra);
      } else if(this.palavraSecreta.indexOf(letra) != -1){
        for(let i = 0; i <= this.palavraSecreta.length; i++){
           if (this.palavraSecreta[i] == letra) {
            palavra[i] = letra;
          }
        }
      }
  }

  buscarEstado() {
    let palavraFinal = palavra.join('');
    if(vidas == 0){
      return "perdeu";
    } else if(vidas != 0 && palavraFinal == this.palavraSecreta){
      return "ganhou";
    }
  }

  buscarDadosDoJogo() {
      return {
          letrasChutadas: letrasChutadas,
          vidas: vidas,
          palavra: palavra
      }
  }

  replaceEmptySpace() {
    if (palavra.length == 0) {
      for(let i = 0; i < this.palavraSecreta.length; i++){
         palavra[i] = '_';
      }
    }
  }
}

module.exports = Forca;
