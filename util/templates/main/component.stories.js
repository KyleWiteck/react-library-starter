module.exports = (componentName) => ({
  content: `import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";
import storyDocConfig from "common/storyDocConfig";



// Note: description can be set in back ticks. Using back ticks allows us to add element tags to style our output.
const description = "A text component";

export default storyDocConfig({
  title: "Main/${componentName}",
  component: ${componentName},
  componentOrHookNameForTests: "${componentName}",
  storyDescription: description,
  hookOrComponentCodeExample: undefined,
  argTypes: {
    foo: {
      type: { name: "string", required: true },
      description: "Prop description",
      controlDefaultValue: "Add default value here to set the default of the control",
      defaultValueTableSummary: {summary: "Add default value here for reference in table"},
      argTypeIsForStoryOnly: true,
      control: {
        type: "text",
        disable: false,
      },
    },
  },
});

const ${componentName}Template: Story<${componentName}Props> = (args) => <${componentName} {...args} />;

export const ${componentName}Story = ${componentName}Template.bind({});
`,
  extension: `.stories.tsx`,
});
