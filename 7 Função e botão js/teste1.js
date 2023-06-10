function pegaValor()
{
    alert(document.getElementById("nome").value)
    // mostra uma mensagem de alerta com o texto que foi salvo na variável id "nome"
    // ou seja, mensagem de alerta da mensagem que foi enviada.
    document.getElementById("nome").value = "Mudei o conteúdo daqui hehe!"
    // muda o que estava escrito para ser enviado dentro da caixinha pela id "nome",   
    // ou seja, muda o que estava escrito na caixinha de envio para "Mudei o conteúdo daqui hehe!".
}


function teste()
{   
    var elemento = document.getElementById("intro")
    // pega o conteúdo, um texto, dentro da variável intro
    elemento.align = "center";
    // alinha esse texto
    elemento.innerHTML = "O texto foi modificado!"
    // muda esse texto para outro texto "O texto foi modificado!"
}

function sugereNome()
{   
    var pessoas = ["Ana", "Vanessa", "Alessandra", "Goulart", "Danilo"]
    // cria uma variável lista com os nomes Ana, Vanessa, Alessandra, Goulart e Danilo
    let doc = document.querySelector("#texto")
    // É atribuída um elemento novo a primeira variável texto, 
    // O elemento adicionado é o: "doc" os nomes aleatorios abaixo, e ele é atribuido através da palavra-chave let.
    doc.textContent = pessoas[(Math.floor(Math.random()*pessoas.length))]
    // Math.random() gera um número aleatório decimal entre 0 (inclusivo) e 1 (exclusivo).
    // Math.random() * list.length multiplica o número aleatório pelo comprimento da lista.
    // Math.floor arredonda o número decimal aleatório para baixo, para o número inteiro mais próximo, exemplo, 6,94 seria arredondado para 6.
    // pessoas[(())] usa o número inteiro arredondado como um índice para acessar um elemento na matriz da lista.
    // assim é criado um sorteio :D
}
