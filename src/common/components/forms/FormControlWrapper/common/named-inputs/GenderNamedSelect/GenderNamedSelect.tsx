import Select from 'common/components/forms/custom-inputs/Select/Select'
import UniqueSelectOptions from 'common/data/UniqueSelectOptions.json'
import React from 'react'
import { GenderNamedSelectProps } from './GenderNamedSelect.types'

const GenderNamedSelect = React.forwardRef<
    HTMLSelectElement,
    GenderNamedSelectProps
>((props: GenderNamedSelectProps, forwardRef) => {
    return (
        <Select
            name="gender"
            ref={forwardRef}
            options={UniqueSelectOptions.maleAndFemaleSelectOptions}
            {...props}
        />
    )
})

export default GenderNamedSelect
