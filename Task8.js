const fs = require("fs");

function saveTaskCallback(task, callback) {
    fs.appendFile("tasks.txt", task + "\n", (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}

saveTaskCallback("Complete Node.js Task 8", (err) => {
    if (err) {
        console.log("Failed to save task:", err);
    } else {
        console.log("Task saved successfully!");
    }
});
