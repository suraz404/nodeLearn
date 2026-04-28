const fs = require("fs");
const path = require("path");

const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);

fs.writeFileSync(filePath, "this is initial path", "utf-8");

const fileRead = fs.readFileSync(filePath, "utf-8");
console.log(fileRead);
