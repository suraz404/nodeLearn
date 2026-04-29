const fs = require("fs");
const path = require("path");

const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);
const newPath = path.join(__dirname, "updated.txt");

fs.writeFileSync(filePath, "this is initial path", "utf-8");

const fileRead = fs.readFileSync(filePath, "utf-8");
console.log(fileRead);

fs.appendFileSync(filePath, "This is updated path");

fs.renameSync(filePath, newPath);

fs.unlinkSync(); //this is how we are going to delete
fs.unlinkSync(); //this is how we are going to delete
fs.unlinkSync(); //this is how we are going to delete
