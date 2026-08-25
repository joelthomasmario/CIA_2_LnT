const fs = require("fs");

function saveTaskPromise(task) {
    return fs.promises.appendFile("tasks.txt", task + "\n");
}

async function saveTaskAsync(task) {
    try {
        await saveTaskPromise(task);
        console.log("Task saved successfully using async/await!");
    } catch (err) {
        console.log("Failed to save task:", err.message);
    }
}

saveTaskAsync("Complete Node.js Task 11");
