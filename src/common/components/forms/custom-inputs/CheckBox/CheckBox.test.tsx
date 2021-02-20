import userEvent from '@testing-library/user-event'
import { renderEnvironment } from 'common/tools/TestUtils'
import React from 'react'
import CheckBox from './CheckBox'

describe('CheckBox', () => {
    it('should render the text provided in the checkbox options label property', () => {
        const { getByText } = renderEnvironment(
            <CheckBox
                onChange={jest.fn()}
                name={'Hello'}
                label={'Hello'}
                id="test"
                index={0}
                value="Hello"
            />
        )

        expect(getByText('Hello')).toBeInTheDocument()
    })

    it('should be able to become checked when clicking the label', () => {
        const component = renderEnvironment(
            <CheckBox
                onChange={jest.fn()}
                name={'Hello'}
                label={'Hello'}
                id="test"
                index={0}
                value="Hello"
            />
        )

        const labelElement = component.getByText('Hello')
        const checkboxElement = component.container.querySelector('input')
        userEvent.click(labelElement)

        expect(checkboxElement).toBeChecked()
    })

    it('should be able to set a value when checked', () => {
        let testValue: string | number
        const setTestValue = jest.fn((value: string | number) => {
            testValue = value
        })
        const component = renderEnvironment(
            <CheckBox
                onChange={setTestValue}
                name={'Hello'}
                label={'Hello'}
                id="test"
                index={0}
                value="Hello"
            />
        )

        const checkboxElement = component.container.querySelector('input')
        userEvent.click(checkboxElement)

        expect(checkboxElement).toBeChecked()
        expect(testValue).toBe('Hello')
    })
})
