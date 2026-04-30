const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "asyncFile.txt");

fs.writeFile(
  filePath,
  "this is initial data using async file system",
  "utf-8",
  (err) => {
    if (err) console.log("There is a error");
    else console.log("file created ");
  },
);
