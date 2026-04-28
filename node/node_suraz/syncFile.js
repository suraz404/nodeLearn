const fs = require("fs");
const path = require("path");

const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);

fs.writeFileSync(filePath, "this is initial path", "utf-8");
