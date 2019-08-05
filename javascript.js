class Timer {
    constructor(time, span, auto) {
        this.time = time;
        this.span = span;
        this.start_time = time;
        this.timer = document.createElement("div");
        this.count = document.createElement("div");
        this.count.classList.add("count");
        this.setCountdownValue();
        this.timer.appendChild(this.count);
        this.button = document.createElement("input");
        this.button.type = "button";
        this.button.classList.add("buttonTimer");
        this.button.onclick = this.onClick.bind(this);
        this.button.value = "Запустити";
        this.timer.appendChild(this.button);
        this.line = document.createElement("div");
        this.line.classList.add("timer_line");
        this.timer.appendChild(this.line);
        this.started = false;
        document.body.appendChild(this.timer);

        if (auto) {
            this.start();
        }
    }

    setCountdownValue() {
        let m = Math.floor(this.time / 60);
        let s = this.time - m * 60;
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        this.count.textContent = m + ":" + s;
    }

    countDown() {
        const width = this.time / this.start_time * 100;
        this.line.setAttribute("style", 'width:' + width + '%');
        this.setCountdownValue();
        if (this.time <= 0) {
            this.stop();
        } else {
            this.time = this.time - this.span / 1000;
        }
    }

    start() {
        this.started = true;
        this.button.value = "Зупинити";

        this.countDown();
        this.interval = setInterval(this.countDown.bind(this), this.span);
    }

    onClick() {
        if (this.started) {
            this.stop();
        } else {
            this.start();
        }
    }

    stop() {
        this.started = false;
        this.button.value = "Запустити";

        clearInterval(this.interval);
    }
}
let time1 = new Timer(1 * 60, 1000, false);
let time2= new Timer(99 * 60, 2000, true);