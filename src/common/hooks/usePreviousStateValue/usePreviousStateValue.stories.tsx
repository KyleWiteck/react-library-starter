import { Button, Text } from '@chakra-ui/react'
import { Story } from '@storybook/react/types-6-0'
import storyDocConfig from 'common/tools/storyDocConfig'
import React, { useState } from 'react'
import usePreviousStateValue from './usePreviousStateValue'

// Note: the two constants directly below can be se in back ticks. Using back ticks allow us to add element tags and code.
const exampleCode = `const UsePreviousValueTestComponent = () => {
  const [counter, setCounter] = useState<number>(0);
  const prevState = usePreviousStateValue({ counter, setCounter });

  return (
    <>
      <Text mb={6}>
        This story was built to show that the previous state gets saved. The information below will reflect both
        previous and current states of the counter
      </Text>
      <Text>The current state value is: {counter}</Text>
      <Text mb={6}>The previous state value was: {prevState?.counter}</Text>
      <Button onClick={() => setCounter(counter + 1)}>Click Me To Update Counter</Button>
    </>
  );
};`
const description =
    'This hook is used to store a ref of a states previous value to compare previous state to current state.'

export default storyDocConfig({
    title: 'Hooks/usePreviousStateValue',
    component: undefined,
    componentOrHookNameForTests: 'usePreviousStateValue',
    storyDescription: description,
    hookOrComponentCodeExample: exampleCode,
    argTypes: {
        usePreviousValueArgs: {
            name: 'usePreviousValue Args',
            type: { name: '{ state, setState }', required: true },
            description:
                'An object that consists of both state and setState of the state that needs the previous value stored. This is not a prop. It is a parameter of the hook',
            controlDefaultValue: undefined,
            defaultValueTableSummary: undefined,
            argTypeIsForStoryOnly: false,
            control: {
                disable: true,
            },
        },
    },
})

const UsePreviousValueTestComponent = () => {
    // Edit the line below as needed and return some UI to test the hook/
    const [counter, setCounter] = useState<number>(0)
    const prevState = usePreviousStateValue({ counter, setCounter })

    return (
        <>
            <Text mb={6}>
                This story was built to show that the previous state gets saved.
                The information below will reflect both previous and current
                states of the counter
            </Text>
            <Text>The current state value is: {counter}</Text>
            <Text mb={6}>
                The previous state value was: {prevState?.counter}
            </Text>
            <Button onClick={() => setCounter(counter + 1)}>
                Click Me To Update Counter
            </Button>
        </>
    )
}

const usePreviousValueTemplate: Story = () => <UsePreviousValueTestComponent />

export const usePreviousValueStory = usePreviousValueTemplate
