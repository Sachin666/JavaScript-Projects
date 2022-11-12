const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d')
const shakeBtn = document.querySelector('.shake');
const MOVE_AMOUNT = 20

const { width, height } = canvas
let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)

ctx.line = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.beginPath()
ctx.moveTo(x, y)
ctx.lineTo(x, y)
ctx.stroke()



const draw = ({ key }) => {

    hue += 1
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

    ctx.beginPath()
    ctx.moveTo(x , y)

    switch(key) {
        case 'ArrowUp' :
            y -= MOVE_AMOUNT;
        break;
        case 'ArrowRight' :
            x += MOVE_AMOUNT;
        break;
        case 'ArrowDown' :
            y += MOVE_AMOUNT;
        break;
        case 'ArrowLeft' :
            x -= MOVE_AMOUNT;
        break;
        default:
        break;
    }
    ctx.lineTo(x, y)
    ctx.stroke()
}


const handleKey= (e) => {
    if(e.key.includes('Arrow'))
    {
        e.preventDefault()    
        draw({ key: e.key })

    }
}


const clearCanvas = () => {
    canvas.classList.add('shake')
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shale')
    }, { once: true })
}


window.addEventListener('keydown', handleKey)
