function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = (hookName) => ({
  content: `
import React from "react";
// import ${hookName} from "./${hookName}";
import { Story } from "@storybook/react/types-6-0";
import storyDocConfig from "common/storyDocConfig";



// Note: the two constants directly below can be se in back ticks. Using back ticks allow us to add element tags and code.
const exampleCode = "Add a simple example on how to use the hook";
const description = "Hook Description";

export default storyDocConfig({
  title: "Hooks/${hookName}",
  component: undefined,
  componentOrHookNameForTests: "${hookName}",
  storyDescription: description,
  hookOrComponentCodeExample: exampleCode,
  argTypes: {
    propName: {
      type: { name: "UseGetCarrierInfoConfig", required: true },
      description: "Prop description",
      controlDefaultValue: {summary: "Add default value here for reference in table"},
      defaultValueTableSummary: {summary: "Add default value here for reference in table"},
      argTypeIsForStoryOnly: true,
      control: {
        disable: true,
      },
    },
  },
});

interface ${capitalizeFirstLetter(hookName)}TestProps {
  testCase: string;
}

const ${capitalizeFirstLetter(hookName)}TestComponent = (props: ${capitalizeFirstLetter(hookName)}TestProps) => {
  // Edit the line below as needed and return some UI to test the hook/
  // const {  } or [  ] = ${hookName}();

  return <div>Change out this UI with UI to use your hook</div>;
}

const ${capitalizeFirstLetter(hookName)}Template: Story<${capitalizeFirstLetter(hookName)}TestProps> = (args) => (
  <${capitalizeFirstLetter(hookName)}TestComponent {...args} />
);

export const ${capitalizeFirstLetter(hookName)}Story = ${capitalizeFirstLetter(hookName)}Template.bind({});

`,
  extension: `.stories.tsx`,
});
