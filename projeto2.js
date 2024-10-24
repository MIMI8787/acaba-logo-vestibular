function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById ('container');
    let cartao = document.createElement ('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
    <div class = "cartao-conteudo" onclick="mostraResposta(this)">
    <h3> ${categoria} </h3>
    <div class = "cartao-pergunta">
    <p> ${pergunta} </P>
    </div>
    <div class = "cartao-resposta">
    <p> ${resposta} </p>
    </div>
    </div>
    `
   
    container.appendChild(cartao);
    }

function mostraResposta(card){
    const resposta = card.querySelector('.cartao-resposta');
    if(resposta.style.display === 'none'){
        resposta.style.display = 'block';
    }
    else{
        resposta.style.display = 'none';
    }
}
    