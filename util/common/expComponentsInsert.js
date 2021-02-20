const fs = require("fs");

module.exports = (dirExportString, componentName) =>
  setTimeout(() => {
    const exportComponentString = `export { default as ${componentName} } from "${dirExportString}";\n`;

    fs.appendFile("src/index.ts", exportComponentString, function (err) {
      if (err) return console.log(err);
    });

    console.log("Component export has been added to index.tsx");
  }, 3000);
