const fs = require("fs");

function saveTaskPromise(task) {
    return fs.promises.appendFile("tasks.txt", task + "\n");
}

saveTaskPromise("Complete Node.js Task 10")
    .then(() => {
        console.log("Task saved successfully using Promise!");
    })
    .catch((err) => {
        console.log("Failed to save task:", err);
    });
