import Input from 'common/components/forms/custom-inputs/Input/Input'
import React from 'react'
import { LastNamedInputProps } from './LastNamedInput.types'

const LastNamedInput = React.forwardRef<HTMLInputElement, LastNamedInputProps>(
    (props: LastNamedInputProps, forwardRef) => {
        return <Input name="last_name" ref={forwardRef} {...props} />
    }
)

export default LastNamedInput
