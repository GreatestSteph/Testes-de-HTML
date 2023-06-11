function sleep(delay) {
    // função sleep é criada
    // delay é um parâmetro
    return new Promise(resolve => setTimeout(resolve, delay));
    // preciso pesquisar um pouco mais sobre o que significa new 
    // preciso pesquisar um pouco mais sobre o que significa promise
    // preciso pesquisar um pouco mais sobre o que significa resolve
    // preciso pesquisar um pouco mais sobre o que significa delay
    }
  
  async function mudaImg() {
    // preciso pesquisar um pouco mais sobre o que significa async
    let count = 0;
    // variável "count" igual a 0
    while (true) {
        // enquanto a variável for 0, ou seja, true
        document.getElementById('image').src = "triste.png";
        // mude a imagem da id image, no documento, para o emoji triste
        await sleep(2000);
        // preciso pesquisar o que significa await
        // usa a função 
        // espera 2 segundos, ou seja, 2000
        document.getElementById('image').src = "rindo.png";
        // mude a imagem da id image, no documento, para o emoji rindo
        await sleep(2000);
        // preciso pesquisar o que significa await
        // usa a função 
        // espera 2 segundos, ou seja, 2000
        document.getElementById('image').src = "feliz.jpg";
        // mude a imagem da id image, no documento, para o emoji feliz
        await sleep(2000);
        // preciso pesquisar o que significa await
        // usa a função 
        // espera 2 segundos, ou seja, 2000
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    mudaImg();
  });

// aqui fizemos uma imagem que muda repetidamente :D



// agora vamos fazer outra coisa

window.addEventListener('load', function() {
// preciso pesquisar o que significa window
// preciso pesquisar o que significa addEventListener
// preciso pesquisar o que é load 
// está e uma função
    var imagem = document.getElementById('movendo');
    // variável imagem guarda a id da imagem do gato
    var container = document.getElementById('corre');
    // variável container guarda a id da div corre
    imagem.style.width = container.clientWidth;
    // preciso pesquisar o que significa style.width e clientWidth
});

// observação: eu misturei diversos códigos meus e do chatgpt, funcionou de algum jeito lol.