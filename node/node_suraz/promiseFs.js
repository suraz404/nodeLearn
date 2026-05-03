const path = require("path");
const fs = require("fs/promises");

const filePath = path.join(__dirname, "promiseFs.txt");

fs.writeFile(filePath, "this is the intial data ", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fs.readFile(filePath, "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fs.appendFile(filePath, "this is new data", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fs.unlink(); //same tei
