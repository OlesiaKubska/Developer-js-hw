//alert ?????

function sendSos (logFunc, alertFrequency, alertPeriod) {
    let currentTime = 0;

    setInterval(() => {
        logFunc()
        
        currentTime += alertFrequency

        if (currentTime >= alertPeriod) {
            clearInterval(intervalId);
            console.log("Stop");
        }
    }, alertFrequency)
}

function sos() {
    console.log("Help");
}

sendSos(sos, 2000, 20000);