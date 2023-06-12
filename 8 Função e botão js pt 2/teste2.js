function teste()
{
    var ediv = document.getElementById("main")
    // a variavel "ediv" pega o conteúdo do id "main"
    var ep = ediv.getElementsByTagName("p")
    // a variavel "ep" pega os elementos contidos na variavel "ediv"
    // mas apenas pega aqueles que tem a tag "p"
    ep[0].align = "center"
    // coloque o primeiro elemento "p" no centro
    ep[2].align = "right"
    // coloque o terceiro elemento "p" à direita
    ep[1].textContent = "Modifiquei o conteúdo"
    // mude o texto do segundo elemento "p" para "Modifiquei o conteúdo"
}

function mudartexto(mudada)
// função "mudartexto" com o a parâmetro "mudada"
// obs: parâmetro é um tipo de variável que não sabe sua medição
{
    mudada.innerHTML="Ooops!"
    // "mudada" ganha um innerHTML/conteúdo de texto que é "Ooops!"
}
