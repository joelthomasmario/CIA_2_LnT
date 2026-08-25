const fs = require("fs");

fs.readFile("tasks.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Tasks:");
    console.log(data);
});
