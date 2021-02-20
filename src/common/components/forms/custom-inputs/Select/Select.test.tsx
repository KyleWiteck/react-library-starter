import { ChakraProvider } from '@chakra-ui/react'
import { cleanup, render, RenderResult, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Select from './Select'

describe('Select', () => {
    let comp: RenderResult
    let selectElement: HTMLSelectElement
    let selectValue: string | number = ''
    let setInputValue

    beforeEach(() => {
        setInputValue = jest.fn((value: string | number) => {
            selectValue = value
        })

        comp = render(
            <ChakraProvider>
                <Select
                    label="Some Label"
                    onChange={setInputValue}
                    value={selectValue}
                    placeholder="placeholder"
                    options={[
                        { label: 'React', value: 'react' },
                        { label: 'Vue', value: 'vue' },
                    ]}
                    id="testID"
                />
            </ChakraProvider>
        )

        selectElement = comp.container.querySelector(
            '#testID'
        ) as HTMLSelectElement
    })

    afterEach(() => {
        selectValue = undefined
        cleanup()
    })

    it('should render the entire fieldset - form label & select with options.', async () => {
        const { container, getByText } = await comp
        const labelElement = container.getElementsByClassName(
            'form-control__label'
        )

        expect(getByText('Some Label')).toBeInTheDocument()
        expect(labelElement).toHaveLength(1)
        expect(selectElement.children[0].textContent).toBe('placeholder')
        expect(selectElement.children[1].textContent).toBe('React')
        expect(selectElement.children[2].textContent).toBe('Vue')
        expect(selectValue).toBe('')
    })

    it('Should should change value on selected', async () => {
        userEvent.selectOptions(selectElement, 'vue')
        waitFor(() => expect(selectValue).toBe('vue'))

        await userEvent.selectOptions(selectElement, 'react')
        await waitFor(() => expect(selectValue).toBe('react'))
    })
})
