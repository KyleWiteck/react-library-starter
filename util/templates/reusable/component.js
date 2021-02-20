module.exports = (componentName) => ({
  content: `import React from "react";
import { ${componentName}Props } from "./${componentName}.types";

const ${componentName} = (props: ${componentName}Props) => {
  // props
  const { foo } = props
  // state
  
  // refs

  // useEffects
  
  // Unique Functions

  return <div className="foo-bar">{foo}</div>
};

export default ${componentName};

`,
  extension: `.tsx`,
});
