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
    // O documento que possui a id "texto", recebe o que está contido na variável doc.
    doc.textContent = pessoas[(Math.floor(Math.random()*pessoas.length))]
    // doc.textContent = significa "o conteúdo de texto dentro de doc é = "
    // Math.random() gera um número aleatório decimal entre 0 (inclusivo) e 1 (exclusivo).
    // Math.random() * list.length multiplica o número aleatório pelo comprimento da lista.
    // Math.floor arredonda o número decimal aleatório para baixo, para o número inteiro mais próximo, exemplo, 6,94 seria arredondado para 6.
    // pessoas[(())] usa o número inteiro arredondado como um índice para acessar um elemento na matriz da lista.
    // assim é criado um sorteio :D
}

function sugereNome2()
{   
    var novaspessoas = ["Pedro", "Pablo", "Tiana", "Amanda", "Bianca"]
    // cria uma variável lista com os nomes Ana, Vanessa, Alessandra, Goulart e Danilo
    let loc = document.querySelectorAll('.texto')
    // O documento que possui a classe "texto", recebe o que está contido na variável loc.
    loc[0].textContent = novaspessoas[(Math.floor(Math.random()*novaspessoas.length))]
    // Sorteia um nome, no texto que vem primeiro [0]
    loc[1].textContent = novaspessoas[(Math.floor(Math.random()*novaspessoas.length))]
    // Sorteia um nome, no texto que vem em segundo [1]
}
