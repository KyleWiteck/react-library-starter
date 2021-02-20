import Input from 'common/components/forms/custom-inputs/Input/Input'
import React from 'react'
import { EmailNamedInputProps } from './EmailNamedInput.types'

const EmailNamedInput = React.forwardRef<
    HTMLInputElement,
    EmailNamedInputProps
>((props: EmailNamedInputProps, forwardRef) => {
    return <Input name="email" ref={forwardRef} {...props} />
})

export default EmailNamedInput
