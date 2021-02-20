import { FormLabel, Input } from '@chakra-ui/react'
import { FormValidationMessagechakraUIPropOverrides } from 'common/components/forms/custom-inputs/common/FormValidationMessage/FormValidationMessage.types'
import { PositionUnion } from 'common/components/forms/custom-inputs/common/LabelPositionWrapper/LabelPositionWrapper.types'
import { DateValue } from 'common/components/forms/custom-inputs/DateInput/DateInput.types'
import { ComponentProps } from 'react'

export type ObjectArray = { [key: string]: any }[]

export type UnknownObjectAny = { [key: string]: any }

export type UnknownObjectString = { [key: string]: string }

export type importImage = (imgSrc: string) => void

export type EnvironmentVariable = 'production' | 'development' | 'staging'

export type RadioOptionConfig = {
    label: string
    value: string
    img: string
}

export {
    SelectChakraUIPropOverrides,
    SelectOption,
    SelectProps,
} from './common/components/forms/custom-inputs/Select/Select.types'

export type AvailableNames =
    | 'date_of_birth'
    | 'email'
    | 'gender'
    | 'state'
    | 'zip_code'
    | 'phone'
    | 'first_name'
    | 'last_name'

export type AmericanStates =
    | 'AL'
    | 'AK'
    | 'AS'
    | 'AZ'
    | 'CA'
    | 'AR'
    | 'CT'
    | 'DE'
    | 'DC'
    | 'CO'
    | 'FM'
    | 'FL'
    | 'GA'
    | 'GU'
    | 'HI'
    | 'ID'
    | 'IL'
    | 'IN'
    | 'IA'
    | 'KS'
    | 'KY'
    | 'LA'
    | 'ME'
    | 'MH'
    | 'MD'
    | 'MA'
    | 'MI'
    | 'MN'
    | 'MS'
    | 'MO'
    | 'MT'
    | 'NE'
    | 'NV'
    | 'NH'
    | 'NJ'
    | 'NM'
    | 'NY'
    | 'NC'
    | 'ND'
    | 'MP'
    | 'OH'
    | 'OK'
    | 'OR'
    | 'PW'
    | 'PA'
    | 'PR'
    | 'RI'
    | 'SC'
    | 'SD'
    | 'TN'
    | 'TX'
    | 'UT'
    | 'VT'
    | 'VI'
    | 'VA'
    | 'WA'
    | 'WV'
    | 'WI'
    | 'WY'

export type PossibleFormValues = {
    date_of_birth?: DateValue
    email?: string | undefined
    gender?: 'M' | 'F' | undefined
    state?: AmericanStates | undefined
    zip_code?: string | undefined
    phone?: string | undefined
    first_name?: string | undefined
    last_name?: string | undefined
}

export interface CommonInputChakraOverrides {
    formValidationText?: FormValidationMessagechakraUIPropOverrides
    formLabel?: Omit<ComponentProps<typeof FormLabel>, 'children'>
    inputProps?: Omit<
        ComponentProps<typeof Input>,
        | 'children'
        | 'onClick'
        | 'type'
        | 'placeholder'
        | 'id'
        | 'value'
        | 'onChange'
        | 'name'
        | 'inputMode'
        | 'onKeyDown'
        | 'maxLength'
        | 'ref'
        | 'autoFocus'
        | 'className'
    >
    formFieldWrapperFormControl?: FormValidationMessagechakraUIPropOverrides
}

export interface CommonInputProps {
    id?: string | undefined
    customInputClassName?: string | undefined
    name?: string
    autoFocus?: boolean | undefined
    disableChakraStyles?: boolean | undefined
    label?: string | undefined
    labelPosition?: PositionUnion | undefined
    validationMessage?: string
    placeholder?: string
    defaultValue?: string | number | readonly string[]
    onBlur?: (value: string | number | undefined) => void
}
