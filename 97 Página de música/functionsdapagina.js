var cores = ["darkred", "darkblue", "darkgreen", "darkred"];
// cria uma variável lista com as cores red blue green e red
    var posição = 0;
    // variavel é igual a 0
    function mudaofundo() {
        // função mudaofundo
        document.body.style.backgroundColor = cores[posição];
        // as cores do fundo são igual a lista "cores" com posição inicial 0
        posição = (posição + 1) % cores.length;
        // posição aumenta +1, ou seja, muda de cor
        setTimeout(mudaofundo, 11000);
        // 11 segundos
    }
window.onload = mudaofundo;


// mostra uma seleção escondida
function escrevernovaopção() {
    var caixadeseleção1 = document.getElementById("estilomusica");
    var outraopção1 = caixadeseleção1.options[caixadeseleção1.selectedIndex];
    var novacaixa1 = document.getElementById("digitenovo");

    if (outraopção1.value === "outro") {
        novacaixa1.style.display = "block";
      } else {
        novacaixa1.style.display = "none";
      }
}



// mostra uma seleção escondida
function AuxilioViagem() {
    var checkboxNacionalidade = document.querySelectorAll('input[name="nacionalidade"]:checked');
    var escondidoauxilio = document.getElementById('auxiliopais');

    if (checkboxNacionalidade.length > 0) {
      escondidoauxilio.style.display = 'block';
    } else {
      escondidoauxilio.style.display = 'none';
    }
  }


// mostra uma seleção escondida
function Acompanhante() {
    var temMenorSim = document.getElementById('menorsim');
    var acompanhantetexto = document.getElementById('acompanhante');

    if (temMenorSim.checked) {
        acompanhantetexto.style.display = 'block';
    } else {
        acompanhantetexto.style.display = 'none';
    }
}


// mostra uma seleção escondida
function qualdeficienciaEauxilio() {
    var deficSim = document.getElementById('deficienciasim');
    var escondidoAjudanteDef1 = document.getElementById('ajudantedef1');
    var escondidoAjudanteDef2 = document.getElementById('ajudantedef2');

    if (deficSim.checked) {
        escondidoAjudanteDef1.style.display = 'block';
        escondidoAjudanteDef2.style.display = 'block';
    } else {
        escondidoAjudanteDef1.style.display = 'none';
        escondidoAjudanteDef2.style.display = 'none';
    }
  }


//valida data
function validadata(novadata) {
    var dataselecionada = new Date(novadata.value);
    var Datamin = new Date("2023-07-03");
    var Datamax = new Date("2023-07-22");

    if (dataselecionada < Datamin || dataselecionada > Datamax) {
      alert("Por favor, selecione uma data entre 3 de julho e 22 de julho de 2023!");
      novadata.value = "";
      return;
    }
}


//valida horario
function validarhorário(horadef) {
    var selectedTime = horadef.value;
    var minHora = "15:00";
    var maxHora = "22:00";

    if (selectedTime < minHora || selectedTime > maxHora) {
      alert("Por favor, selecione um horário entre 15:00 e 22:00!");
      horadef.value = "";
    }
}


//valida email
function validaEmail(verificaemail) {
    var emaildigitado = verificaemail.value;
    var emailcorreto = /^[^\s@]+@[^\s@]+\.[^\s@.]+$/;

    if (!emailcorreto.test(emaildigitado)) {
        alert("Por favor, digite o email corretamente!");
    }
}

//valida o telefone
function validatelefone(telele) {
    var telefone = telele.value;
    telefone = telefone.replace(/\D/g, '');
    var telefoneformatado = '+' + telefone.substring(0, 2) + " ("  + telefone.substring(2, 4) + ') ' + telefone.substring(4, 13)
    telele.value = telefoneformatado;
    return /\d/.test(String.fromCharCode(event.keyCode));
}
function validatelefone2(telele){
    var telefone = telele.value;
    telefone = telefone.replace(/\D/g, '');
    var tamanhoesperado = 11;
    if (telefone.length < tamanhoesperado) {
        alert('Número inválido, por favor digite corretamente ou digite outro celular!');
    }
}

//valida musica
function validamusica(musisi){
    var musicaval = musisi.value;
    var tamanhoesperadodo = 3;
    if (musicaval.length < tamanhoesperadodo) {
        alert('Por favor, digite o seu estilo musical corretamente!');
    }
}

//valida banda
function validabanda(banban){
    var bandanome = banban.value;
    var bandaesperada = 2;
    if (bandanome.length < bandaesperada) {
        alert('Por favor, digite o nome de sua banda corretamente!');
    }
}

//valida o nome de alguém
function validanome(nomepessoa){
    var name = nomepessoa.value;
    if (/[\d!@+.]/.test(name)) {
        alert('Por favor, digite um nome sem números ou símbolos!');
        nomepessoa.value = '';
        return;
    }
    if (name.length < 13) {
        alert('Por favor, digite o nome corretamente!');
        nomepessoa.value = '';
        return;
    }
}

//valida deficiencia
function deficienciavalida(deficvalida){
    var nomedefi = deficvalida.value;
    var nomedefiesperado = 5;
    if (nomedefi.length < nomedefiesperado) {
        alert('Por favor, digite corretamente!');
    }
}


//botão valida o formulário inteiro
function validaformulario() {
    var input1 = document.getElementById("nome");
    var input2 = document.getElementById("digitenovo");
    var input3 = document.getElementById("email");
    var input4 = document.getElementById("data");
    var input5 = document.getElementById("acompanhante");
    var input6 = document.getElementById("ajudantedef2");
    var input7 = document.getElementById("hora");
    var formulariovalido = true;
  
    if (input1.value === "") {
        formulariovalido = false;
    }
    if (input2.value === "") {
        formulariovalido = false;
    }
    if (input3.value === "") {
        formulariovalido = false;
    }
    if (input4.value === "") {
        formulariovalido = false;
    }
    if (input5.value === "") {
        formulariovalido = false;
    }
    if (input6.value === "") {
        formulariovalido = false;
    }
    if (input7.value === "") {
        formulariovalido = false;
    }
    if (!formulariovalido) {
      alert("Por favor, preencha o formulário corretamente!");
    } else {
      alert("Formulário enviado com sucesso!");
    }
}
  
  
  
  
  
  