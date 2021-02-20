const fs = require("fs");

module.exports = (dirImportString) =>
  setTimeout(() => {
    const impComponentStylesString = `@import "${dirImportString}";\n`;

    fs.appendFile("src/styles.scss", impComponentStylesString, function (err) {
      if (err) return console.log(err);
    });

    console.log("Component styles import has been added to styles.scss");
  }, 3000);
