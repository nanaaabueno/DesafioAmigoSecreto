//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Desafio Amigo Secreto

let listaAmigos = [];
let listaAmigosSorteado = [];



function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    
    if(amigo ==''){
        alert("Por favor, insira um nome.");
    } else {
        if (listaAmigos.includes(amigo)) {
            alert("Você já incluiu este amigo, digite o próximo nome.");
        } else {
            listaAmigos.push(amigo);
            console.log(listaAmigos);
    }
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';    

    for (let i = 0; i < listaAmigos.length; i++) {
        let lis = document.createElement('li');
        lis.innerHTML = listaAmigos[i];
        lista.appendChild(lis);
    }
    
    limparCampo();

}
}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

function sortearAmigo() {
    // 1. Verificar se os participantes foram incluídos na lista para o sorteio
    if(listaAmigos.length>0){
        //2. Sorteia um número aleatório entre os índices da lista de amigos participantes
        let numeroSorteado = Math.floor(Math.random() * listaAmigos.length); 

        //Verificação adicional - oporptunidade de melhoria (não solicitada no desafio)
        let quantidadeAmigosSorteados = listaAmigosSorteado.length; 
        if(quantidadeAmigosSorteados == listaAmigos.length) {
            alert("Todos os amigos foram sorteados!");
            return;                        
        }
        //3. Repetição para garantir que o o amigo sorteado não se repita
        while (listaAmigosSorteado.includes(numeroSorteado)){
            numeroSorteado = Math.floor(Math.random() * listaAmigos.length);
        }
        //4. Adiciona o ídice do amigo sorteado a lista de sorteados
        listaAmigosSorteado.push(numeroSorteado);
        console.log(listaAmigosSorteado);

        //5. Verifica o nome do amigo sorteado pelo índice da lista
        let nomeSorteado = listaAmigos[numeroSorteado];   
        //6. Pega o elemento do HTML que será usado para exibir o nome sorteado
        let amigoSorteado =  document.getElementById('resultado');
        //7. Mostra o nome sorteado na página para o usuário
        amigoSorteado.innerHTML = nomeSorteado; 

    } else {
        //8. Exibe um aviso ao usuário caso ele não tenha incluído nenhum participante
        alert("Por favor, adicione pelo menos dois amigos para o sorteio.")
    }
}

