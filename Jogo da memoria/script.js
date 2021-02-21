const cards = document.querySelectorAll('.card')
let cardVirado = false;
let primeiroCard, segundoCard;
let trava = false;

const App = {
    // Função que vira a carta selecionada e impede que o jogador vire mais do que 2 cartas
    virarCard(){
        if(trava) return;
        if(this == primeiroCard)return;
        // this vai ser referente ao elemento que irá ser clicado, ou seja a carta.
        this.classList.add('virar');
        if(!cardVirado){
            cardVirado = true;
            // vai atribuir o elemento clicado a variavel
            primeiroCard = this;
            return;
        }
        segundoCard = this;
        cardVirado = false;
        trava = true;
        App.checandoIguais();
    },
    // Função que verifica se as cartas são iguais
    checandoIguais(){
        if(primeiroCard.dataset.card === segundoCard.dataset.card){
            App.desabilitandoCards();
            return;
        }
        App.desvirandoCard();
    },
    // Função que desabilita as cartas iguais encontradas
    desabilitandoCards(){
        primeiroCard.removeEventListener('click',App.virarCard)
        segundoCard.removeEventListener('click',App.virarCard)
        App.reiniciar();
        
    },
    // Função que irá virar a carta novamente se não for igual
    desvirandoCard(){
        trava = true
        setTimeout(() => {
            primeiroCard.classList.remove('virar')
            segundoCard.classList.remove('virar')
            App.reiniciar();
        },1500)
    },
    reiniciar(){
        [cardVirado,trava] = [false,false]
        [primeiroCard,segundoCard]= [null,null]
    },
    randomizando(){
        cards.forEach((card) => {
            let posicaoAleatoria = Math.floor(Math.random() * 12);
            card.style.order = posicaoAleatoria;
        });
    }
}   
// Vai percorrer cada carta e quando clicar na carta irá chamar a função virar carta, que vai identificar a carta que foi clicada através do this e adicionará o virar a classe da carta clicada
cards.forEach((card) => {
    card.addEventListener('click',App.virarCard)
});
App.randomizando()