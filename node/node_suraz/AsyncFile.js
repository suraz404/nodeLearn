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

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log("there is error while fetching the data");
  } else {
    console.log(data);
  }
});

fs.appendFile(
  filePath,
  "this is update data usinf async way",
  "utf-8",
  (err) => {
    if (err) {
      console.log("there is error");
    } else {
      console.log("It's done bro");
    }
  },
);

fs.unlink(filePath, "callback function");
