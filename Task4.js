const fs = require("fs");

fs.readFile("tasks.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const tasks = data.split("\n");

    tasks.forEach(task => {
        if (task.trim() !== "") {
            const timestamp = new Date().toLocaleDateString();
            console.log(`[${timestamp}] ${task}`);
        }
    });
});
