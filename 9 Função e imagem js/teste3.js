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
    var imagege = document.getElementById('movendo');
    // variável imagem guarda a id da imagem do gato
    var container = document.getElementById('corre');
    // variável container guarda a id da div corre
    imagege.style.width = container.clientWidth;
    // define que a imagem tem o mesmo width que o container
});

// observação: eu misturei diversos códigos meus e do chatgpt, funcionou de algum jeito lol.




function teste(){
  setInterval(mudaImg2, 1000)
  // função aciona a outra função mudaImg2 e faz ela funcionar a cada 1 segundo
}

// outra função que muda a imagem repetidamente
function mudaImg2(){
  var imagigi = document.getElementById("image2").src;
  // variavel imagigi pega o elemento que tem a id "image2", que está associado a src
  // você pode usar alert(imagigi) para ver o local que está sendo usado
  if (imagigi.indexOf("rindo.png") !=-1)
  // se no local a imagem for diferente de -1 (se ela existir)
    document.getElementById('image2').src = "triste.png";
    // o documento retorna a imagem triste.png
  else 
    document.getElementById('image2').src = "rindo.png";
    // retorna a imagem rindo novamente
}
