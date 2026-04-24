const path = require("path");

const filepath = path.join("folder", "student", "data.txt");

console.log(filepath);

const resolvedPath = path.resolve(filepath);
const dirname = path.dirname(filepath);
const parseFile = path.parse(filepath);

console.log({
  parseFile,
  dirname,
  resolvedPath,
});
