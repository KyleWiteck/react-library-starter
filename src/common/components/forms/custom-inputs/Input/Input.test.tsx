import { cleanup, render, RenderResult, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { ChangeEvent } from 'react'
import Input from './Input'

describe('Input', () => {
    afterEach(cleanup)

    it('should render a single FormLabel component when the label prop is passed in', () => {
        window.scrollTo = jest.fn()
        const { container, getByText } = render(
            <Input label="Some Label" onChange={jest.fn()} />
        )
        const labelElement = container.getElementsByClassName(
            'form-control__label'
        )

        expect(getByText('Some Label')).toBeInTheDocument()
        expect(labelElement).toHaveLength(1)
    })

    it('Should not render a FormLabel component the label prop is not passed in', () => {
        const { container } = render(<Input onChange={jest.fn()} />)
        const labelElement = container.getElementsByClassName(
            'form-control__label'
        )

        expect(labelElement).toHaveLength(0)
    })

    describe('Inputing value to Input component', () => {
        let comp: RenderResult
        let inputElement: HTMLInputElement
        let inputValue: string | undefined
        let setInputValue

        beforeEach(() => {
            setInputValue = jest.fn((e: ChangeEvent<HTMLInputElement>) => {
                e.preventDefault()
                inputValue = e.target.value
            })

            comp = render(
                <Input
                    label="Some Label"
                    placeholder="Some Placeholder"
                    value={inputValue}
                    onChange={setInputValue}
                />
            )

            inputElement = comp.getByPlaceholderText(
                'Some Placeholder'
            ) as HTMLInputElement
        })

        afterEach(() => {
            inputValue = undefined
            userEvent.clear(inputElement)
        })

        it('Should render the input element', () => {
            expect(inputElement).toBeTruthy()
        })

        it('Should have handle values on change', async () => {
            userEvent.type(inputElement, '1')
            waitFor(() => expect(inputValue).toBe('1'))

            await userEvent.type(inputElement, '2')
            waitFor(() => expect(inputValue).toBe('2'))
        })
    })
})
