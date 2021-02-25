const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let taPulando = false
let posicao = 0
function pressEspaco(event){
    if(event.keyCode === 32){
        if(!taPulando){
            pula()
        }
    } 
}
function pula(){
    
    let tempoPulo = setInterval(()=>{
    taPulando = true
        if(posicao >= 150){
            clearInterval(tempoPulo);
                let tempoQueda = setInterval(() => {
                    if(posicao <= 0){
                        clearInterval(tempoQueda)
                    }else{
                        posicao -= 20;
                        dino.style.bottom = posicao + 'px';
                        taPulando = false    
                    }
                },40)
        }else{
            posicao += 20;
            dino.style.bottom = posicao + 'px';
        }
    },20)
}
function criandoCactus(){
    const cacto = document.createElement('div')
    let posicaoCacto = 1000
    let tempoAleatorio = Math.floor(Math.random() * 6000);
    console.log(tempoAleatorio)

    cacto.classList.add('cacto')
    cacto.style.left = 1000 + 'px'
    background.appendChild(cacto)

    let cactoEsquerda = setInterval(()=>{
        if(posicaoCacto < -30){
            clearInterval(cactoEsquerda)
            background.removeChild(cacto)
        }else if(posicaoCacto > 0 && posicaoCacto < 50 && posicao < 70){
            clearInterval(cactoEsquerda)
            document.body.innerHTML = `<h1 class='game-over'>Fim de jogo</h1>`
        }else{
            posicaoCacto -= 10;
            cacto.style.left = posicaoCacto + 'px'        
        }
    },20)

    setTimeout(criandoCactus,tempoAleatorio);
    
}
document.addEventListener('keyup', pressEspaco);
criandoCactus()