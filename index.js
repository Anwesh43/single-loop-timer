class TimerBlock {
    constructor(time) {
        this.t = 0
        this.createDiv(time)

    }
    createDiv(time) {
        this.div = document.createElement('div')
        this.div.style.width = 200
        this.div.style.height = 200
        this.div.style.margin = 30
        this.div.style.background = 'green'
        this.div.style.color = 'black'
        document.body.appendChild(this.div)
        this.firstText = `this will update after ${time} seconds`
        this.div.innerHTML = this.firstText
        this.div.style.fontSize = 18
        this.div.style.textAlign = 'center'
        this.div.style.float = 'left'
    }
    update() {
        this.t++
        this.div.innerHTML = `${this.firstText}</br> times updated ${this.t}`
    }
}
slTimer.start()
const createTimer = (time) => {
    const timerBlock = new TimerBlock(time)
    slTimer.createTimer(time,()=>{
        timerBlock.update()
    })
}
createTimer(1)
createTimer(2)
createTimer(3)
createTimer(4)
createTimer(5)
createTimer(6)
