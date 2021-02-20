require("colors");
const fs = require("fs");
const templates = require("./templates/reusable");
const expComponentsInsert = require("./common/expComponentsInsert");
const expComponentsPropsInsert = require("./common/expComponentsPropsInsert");
const exec = require("child_process").exec;

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

const componentDirectory = `./src/common/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(`${componentDirectory}/${componentName}${template.extension}`, template.content);
});

const dirString = `./common/components/${componentName}/${componentName}`;
const exportComponentString = `${dirString}`;
const exportComponentPropsString = `${dirString}.types`;

expComponentsInsert(exportComponentString, componentName);
expComponentsPropsInsert(exportComponentPropsString, componentName);

console.log("Successfully created component under: " + componentDirectory.green);
