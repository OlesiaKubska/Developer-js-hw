// Timeout

function getTimeLogger() {
    let id = null;

    function setTimer(delay, message) {
        id = setTimeout(() => console.log(message), delay);
    }

    function cancelTimer() {
        if (id) {
            clearTimeout(id);
        }
    }
    
    return {
        setTimer,
        cancelTimer,
    };
}

const timedLoger = getTimeLogger();
timedLoger.setTimer(1000, "Hello");
// console.log(timedLoger);