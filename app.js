//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Desafio Amigo Secreto

let listaAmigos = [];
console.log(listaAmigos);


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



