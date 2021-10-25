const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let position = 0
isJumping = false

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump()
        }
    }
}
function jump() {
    isJumping = true

    upInterval = setInterval( () =>{

        if (position >= 150) {
            clearInterval(upInterval)

            downInterval = setInterval( () => {
                if (position <= 20) {
                    clearInterval(downInterval)
                    isJumping = false
                }
                position -= 20
                dino.style.bottom = position + 'px'
            }, 20)
        }
        position += 20
        dino.style.bottom = position + 'px'
    }, 20);
}
function createCactus() {
    const cactus = document.createElement('div')
    let cactusPosition = 1000
    let randomTime = Math.random() * 6000

    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus)

    const leftCactus = setInterval( () => {
        cactusPosition -= 10
        cactus.style.left = cactusPosition + 'px'

        if (cactusPosition < -60) {
        clearInterval(leftCactus)
        background.removeChild(cactus)
    }else if(position < 60 && cactusPosition > 0 && cactusPosition < 60) {
        document.body.innerHTML = '<h1 class="game-over">Game Over</h1><br><p class="texto">Pressione F5 para continuar</p>'
    }
}, 20)
setTimeout(createCactus, randomTime)
}


createCactus()
document.addEventListener('keyup', handleKeyUp)