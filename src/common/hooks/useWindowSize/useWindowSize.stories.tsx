// import useWindowSize from "./useWindowSize";
import { Story } from '@storybook/react/types-6-0'
import storyDocConfig from 'common/tools/storyDocConfig'
import { useWindowSize } from 'index'
import React from 'react'

// Note: the two constants directly below can be se in back ticks. Using back ticks allow us to add element tags and code.
const exampleCode = `const UseWindowSizeTestComponent = (props: UseWindowSizeTestProps) => {
    const { screenWidth, screenHeight } = useWindowSize()

    return (
        <div>
            <p>
                Drag the window size around and watch the numbers change
                accordantly
            </p>
            <p>
                The window width is {screenWidth} and the window height is{' '}
                {screenHeight}
            </p>
        </div>
    )
}`
const description =
    'This hook provides the width and height of the browser window'

export default storyDocConfig({
    title: 'Hooks/useWindowSize',
    component: undefined,
    componentOrHookNameForTests: 'useWindowSize',
    storyDescription: description,
    hookOrComponentCodeExample: exampleCode,
})

interface UseWindowSizeTestProps {
    testCase: string
}

const UseWindowSizeTestComponent = (props: UseWindowSizeTestProps) => {
    const { screenWidth, screenHeight } = useWindowSize()

    return (
        <div>
            <p>
                Drag the window size around and watch the numbers change
                accordantly
            </p>
            <p>
                The window width is {screenWidth} and the window height is{' '}
                {screenHeight}
            </p>
        </div>
    )
}

const UseWindowSizeTemplate: Story<UseWindowSizeTestProps> = (args) => (
    <UseWindowSizeTestComponent {...args} />
)

export const UseWindowSizeStory = UseWindowSizeTemplate.bind({})
