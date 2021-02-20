module.exports = (hookName) => ({
  content: `import { useState } from "react";

const ${hookName} = () => {
  const [value, setValue] = useState("initialValue");
  return {
    value,
    onChange: (e) => {
      setValue(e.target.value || e.target.innerText);
    },
  };
}

export default ${hookName};
`,
  extension: `.tsx`,
});
