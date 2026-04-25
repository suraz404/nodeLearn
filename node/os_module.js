const { Console } = require("console");
const os = require("os");

console.log("platform", os.platform());
console.log("User", os.userInfo());
console.log("Cpu architecture", os.arch());
console.log("free memory", os.freemem());
console.log("total memory ", os.totalmem());
console.log("system uptime", os.uptime(), "seconds");
console.log("Homedirectory", os.homedir());
console.log("hostname", os.hostname());
console.log("Network Interference", os.networkInterfaces());
console.log("Cpu info", os.cpus);
console.log("Temporary directory", os.tmpdir());

console.log("OS???? Mac honih ", os.type());
