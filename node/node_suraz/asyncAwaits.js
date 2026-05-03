const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "asyncAwaitsFile.txt");

const writeFile = async () => {
  try {
    await fs.promises.writeFile(filePath, "this is initial data ", "utf-8");
  } catch (error) {
    console.log(error);
  }
};

writeFile();

// same yesari nai aru sabai
