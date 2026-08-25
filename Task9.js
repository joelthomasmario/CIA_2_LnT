const fs = require("fs");

setTimeout(() => {
    console.log("Reminder: review your tasks");
}, 5000);

const interval = setInterval(() => {
    fs.readFile("tasks.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading tasks:", err);
            return;
        }

        const tasks = data
            .split("\n")
            .filter(task => task.trim() !== "");

        console.log("Number of tasks logged:", tasks.length);
    });
}, 3000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Task counter stopped.");
}, 15000);
