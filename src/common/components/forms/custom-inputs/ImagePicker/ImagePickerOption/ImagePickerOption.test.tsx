import { render } from '@testing-library/react'
import React from 'react'
import ImagePickerOption from './ImagePickerOption'

describe('ThankYouBox', () => {
    const img =
        'https://image.shutterstock.com/image-vector/phone-vector-icon-on-flat-600w-1198834861.jpg'
    const props = {
        id: 'test',
        label: 'Test',
    }

    it("should render a label of 'Test'", async () => {
        const { getByText } = render(<ImagePickerOption {...props} />)
        const label = getByText(props.label)

        expect(label).toBeTruthy()
    })

    it('Should render a radio circle by default when image is not passed in.', async () => {
        const { container } = await render(<ImagePickerOption {...props} />)
        const contentWrapper = container.querySelector(
            '#test__option-content-wrapper'
        )
        const optionImgElement = contentWrapper.children[0]

        expect(optionImgElement.tagName).toBe('DIV')
    })

    it('Should render an image if image string is added', async () => {
        const { container } = await render(
            <ImagePickerOption {...props} img={img} />
        )
        const contentWrapper = container.querySelector(
            '#test__option-content-wrapper'
        )
        const optionImgElement = contentWrapper.children[0]

        expect(optionImgElement.tagName).toBe('IMG')
    })

    it('Should render a check mark when selected', async () => {
        const { container } = await render(
            <ImagePickerOption {...props} isSelected={true} />
        )
        const contentWrapper = container.querySelector(
            '#test__option-content-wrapper'
        )
        const optionImgElement = contentWrapper.children[0]

        expect(optionImgElement.tagName).toBe('DIV')
        expect(optionImgElement).toHaveTextContent('✓')
    })
})
