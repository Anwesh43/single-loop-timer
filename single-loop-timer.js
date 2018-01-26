class SingleLoopTimer {
    constructor() {
        this.started = false
        this.timers = []
        this.n = 0
    }
    start() {
        if(!this.started) {
            this.started = true
            this.interval = setInterval(()=>{
                this.timers.forEach((timer)=>{
                    timer.execute()
                })
            },1000)
        }
    }
    stop() {
        if(this.started) {
            this.started = false
            clearInterval(this.interval)
        }
    }
    stopTimer(timerId) {
        this.timers = this.timers.filter((timer)=>timer.i !== timerId)
        if(this.timers.length == 0) {
            this.stop()
        }
    }
    createTimer(limit,updatecb) {
        const timerObject = new TimerObject(limit,updatecb,this.n)
        this.n++
        this.timers.push(timerObject)
        return timerObject
    }
}
class TimerObject {
    constructor(limit,updatecb,i) {
        this.t = 0
        this.updatecb = updatecb
        this.i = i
    }
    setParent(parent) {
        this.parent = parent
    }
    execute() {
        this.t++
        if(this.t == this.limit) {
            this.updatecb()
        }
    }
    stop() {
        if(this.parent) {
            this.parent.stopTimer(this.i)
        }
    }
}
