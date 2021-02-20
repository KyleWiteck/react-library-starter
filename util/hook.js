require("colors");
const fs = require("fs");
const templates = require("./templates/hook");
const expComponentsInsert = require("./common/expComponentsInsert");

const hookName = process.argv[2];

if (!hookName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + hookName);

const hookDirectory = `./src/common/hooks/${hookName}`;

if (fs.existsSync(hookDirectory)) {
  console.error(`Component ${hookName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(hookDirectory);

const generatedTemplates = templates.map((template) => template(hookName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(`${hookDirectory}/${hookName}${template.extension}`, template.content);
});

const dirString = `./common/hooks/${hookName}`;
const exportComponentString = `${dirString}/${hookName}`;

expComponentsInsert(exportComponentString, hookName);

console.log("Successfully created component under: " + hookDirectory.green);
