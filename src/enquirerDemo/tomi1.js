const { prompt } = require("enquirer");

async function mainTask() {
    const response = await prompt({
        type: "input",
        name: "yourAge",
        message: "How old are you?" ,
    });
    const answer = await prompt({
        type: "input",
        name: "faveFood",
        message: "Favourite food?" ,
    })
    console.log("response: ", response);
    console.log(answer);
    
    
}

mainTask();
console.log("AFTER mainTask() was called");
