//capturar os dados do formulário


const dados = document.querySelector('#forms');

dados.addEventListener('reset', function(e){
    const limpa = document.querySelector('#resultado');
    limpa.innerHTML = '';
});

dados.addEventListener('submit', function(event) {
    event.preventDefault();

    //Pegar o valor de cada lado do triangulo
    const lado1 = Number(document.getElementById('lado1').value);
    const lado2 = Number(document.getElementById('lado2').value);
    const lado3 = Number(document.getElementById('lado3').value);

    console.log (lado1, lado2, lado3);
    veri(lado1, lado2, lado3);
   
    

    
    

});

 










//FUNÇÃO PARA VERIFICAR SE O TRIANGULO É VALIDO

function tipo(lado1, lado2, lado3){

    if(lado1 == lado2 && lado2 == lado3 && lado3 == lado1){
        setMostra("<img src='./images/Equila.jpg' alt='Equilátero'>")
    }

    if(lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1){
        setMostra("<img src='./images/Escale.jpg' alt='Equilátero'>")
    }

    if(lado1 == lado2 && lado2 !== lado3 || lado2 == lado3 && lado3 !== lado1 || lado1 == lado3 && lado3 !== lado2 ){
        setMostra("<img src='./images/iso.jpg' alt='Ísoceles'>")
    }






};


function veri(lado1, lado2, lado3){
    if((lado1 > lado2 - lado3) && (lado1 < lado2 + lado3)){

        if((lado2 > lado3 - lado1) && (lado2 < lado3 + lado1)){

            if((lado3 > lado1 - lado2) && (lado3 < lado1 + lado2)){

                tipo(lado1, lado2, lado3);

            }
            
        else{
            setMostra("<img src='./images/Erro.jpg' alt='Erro'>");
            return;
            }
        
        
        }
        else{
            setMostra("<img src='./images/Erro.jpg' alt='Erro'>");
            return;
        }


    }

    else{
        setMostra("<img src='./images/Erro.jpg' alt='Erro'>");
        return;
    }

}








//FUNÇÃO PARA INJETAR UMA RESPOSTA NO LOCAL DESEJADO(#resultado)
function setMostra (frase, verifica) {
    const mensagem = document.querySelector('#resultado');
    mensagem.innerHTML = '';

    const parag = criaP();

    verifica ? parag.classList.add('sim') : parag.classList.add('nao');

    parag.innerHTML = frase;

    mensagem.appendChild(parag);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}







