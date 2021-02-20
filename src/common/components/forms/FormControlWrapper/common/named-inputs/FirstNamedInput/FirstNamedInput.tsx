import Input from 'common/components/forms/custom-inputs/Input/Input'
import React from 'react'
import { FirstNamedInputProps } from './FirstNamedInput.types'

const FirstNamedInput = React.forwardRef<
    HTMLInputElement,
    FirstNamedInputProps
>((props: FirstNamedInputProps, forwardRef) => {
    return <Input name="first_name" ref={forwardRef} {...props} />
})

export default FirstNamedInput
