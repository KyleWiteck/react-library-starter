import { Text } from '@chakra-ui/react'
import { act, fireEvent, render } from '@testing-library/react'
import React, { useState } from 'react'
import ImagePicker from './ImagePicker'
import { ImagePickerOption } from './ImagePicker.types'

const options: ImagePickerOption[] = [
    {
        label: 'React',
        value: 'react',
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_whFSceoRNIyGyiTaPbkncYle6vP58kIbw&usqp=CAU',
    },
    {
        label: 'Vue',
        value: 'vue',
    },
]

const ImagePickerTestComponent = (props) => {
    const [stateValue, setStateValue] = useState<string | undefined>(undefined)

    return (
        <>
            <ImagePicker
                options={options}
                value={stateValue}
                onSelectedOption={(value: string) => {
                    setStateValue(value)
                }}
                {...props}
            />
            <Text data-testid="stateValue">{stateValue}</Text>
        </>
    )
}

describe('ImagePicker', () => {
    it('Should render render options', () => {
        const { container } = render(<ImagePickerTestComponent />)
        const reactOption = container.querySelector(
            '#react__option-label-wrapper'
        )
        const vueOption = container.querySelector('#vue__option-label-wrapper')

        expect(reactOption).toBeTruthy()
        expect(vueOption).toBeTruthy()
    })

    it('Should save the selected value', () => {
        const { container, getByTestId } = render(<ImagePickerTestComponent />)
        const reactOption = container.querySelector(
            '#react__option-label-wrapper'
        )

        act(() => {
            fireEvent.click(reactOption)
        })

        expect(getByTestId('stateValue')).toHaveTextContent('react')
    })
})
