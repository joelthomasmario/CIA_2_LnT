const fs = require("fs");

const task = process.argv.slice(2).join(" ");

if (!task) {
    console.log("Please provide a task description.");
    process.exit(1);
}

console.log("Task:", task);

process.stdout.write("Do you want to save this task? (y/n): ");

process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
    const answer = input.trim().toLowerCase();

    if (answer === "y") {
        fs.appendFile("tasks.txt", task + "\n", (err) => {
            if (err) {
                console.log("Error saving task:", err);
                return;
            }

            console.log("Task saved successfully!");
            process.exit();
        });
    } else if (answer === "n") {
        console.log("Task was not saved.");
        process.exit();
    } else {
        console.log("Please enter y or n.");
    }
});
