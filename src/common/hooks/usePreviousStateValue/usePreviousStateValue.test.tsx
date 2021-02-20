import { Button, ChakraProvider, Text } from '@chakra-ui/react'
import { fireEvent, render } from '@testing-library/react'
import React, { useState } from 'react'
import usePreviousStateValue from './usePreviousStateValue'

const UsePreviousValueTestComponent = () => {
    // Edit the line below as needed and return some UI to test the hook/
    const [counter, setCounter] = useState<number>(0)
    const prevState = usePreviousStateValue({ counter, setCounter })

    return (
        <ChakraProvider>
            <Text data-testid="current">{counter}</Text>
            <Text data-testid="prev">{prevState?.counter}</Text>
            <Button onClick={() => setCounter(counter + 1)} id="button">
                btn
            </Button>
        </ChakraProvider>
    )
}

describe('usePreviousStateValue', () => {
    const { getByText, getByTestId } = render(<UsePreviousValueTestComponent />)
    const btn = getByText('btn')
    const currentState = getByTestId('current')
    const prevState = getByTestId('prev')

    it('should store previous state when state gets updated', async () => {
        fireEvent.click(btn)

        expect(currentState).toHaveTextContent('1')
        expect(prevState).toHaveTextContent('0')

        fireEvent.click(btn)

        expect(currentState).toHaveTextContent('2')
        expect(prevState).toHaveTextContent('1')
    })
})
