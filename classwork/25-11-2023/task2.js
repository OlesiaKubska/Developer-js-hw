//interval

function stopWatch() {
    let id;

    function start(intervalTime, message) {
        setInterval(() => console.log(message), intervalTime)
    }

    function stop() {
        clearInterval(id);

    }

    return {
        start,
        stop,
    }
}

const stoper = stopWatch;

stoper.start(500, "Hello");
stoper.stop();