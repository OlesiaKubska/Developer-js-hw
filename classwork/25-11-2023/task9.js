//wait

async function wait(delay) {
    console.log("Wait...");

    await new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });

    console.log("...a sec");
}


wait(1000);