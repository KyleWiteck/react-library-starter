const fs = require("fs");

module.exports = (dirExportString, componentName) =>
  setTimeout(() => {
    const exportComponentPropsString = `export { ${componentName}Props } from "${dirExportString}";\n`;

    fs.appendFile("src/index.ts", exportComponentPropsString, function (err) {
      if (err) return console.log(err);
    });

    console.log("Component props export has been added to index.tsx");
  }, 3000);
