var cores = ["red", "blue", "green", "red"];
// cria uma variável lista com as cores red blue green e red
    var posição = 0;
    // variavel é igual a 0
    function mudaofundo() {
      // função mudaofundo
        document.body.style.backgroundColor = cores[posição];
        posição = (posição + 1) % cores.length;
        setTimeout(mudaofundo, 11000);
    }

    window.onload = mudaofundo;