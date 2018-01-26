class SingleLoopTimer {
    constructor() {
        this.started = false
        this.timers = []
    }
    start() {
        if(!this.started) {
            this.started = true
            this.interval = setInterval(()=>{
                this.timers.forEach((timer)=>{
                    timer.execute()
                })
            },50)
        }
    }
    stop() {
        if(this.started) {
            this.started = false
            clearInterval(this.interval)
        }
    }
}
