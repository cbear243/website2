rulesBtn = document.getElementById('rules-btn')
rules = document.getElementById('rules')
closeBtn = document.getElementById('close-btn')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

// Create ball properties
ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
}

// Create Paddle properties
paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height -20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
}

// Draw ball on canvas
function drawBall() {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2, true)
    ctx.fillStyle = '#0095'
    ctx.fill()
    ctx.closePath()
}

drawBall()


// Rules open and close event handlers
rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})
