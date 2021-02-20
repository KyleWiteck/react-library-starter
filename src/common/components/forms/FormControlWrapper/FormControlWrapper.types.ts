import { Box, Text } from '@chakra-ui/react'
import Button from 'common/components/Button/Button'
import { DateInputChakraUIPropOverrides } from 'common/components/forms/custom-inputs/DateInput/DateInput.types'
import { ImagePickerChakraUIPropOverrides } from 'common/components/forms/custom-inputs/ImagePicker/ImagePicker.types'
import { PhoneInputChakraUIPropOverrides } from 'common/components/forms/custom-inputs/PhoneInput/PhoneInput.types'
import { SelectChakraUIPropOverrides } from 'common/components/forms/custom-inputs/Select/Select.types'
import { SwitchChakraUIPropOverrides } from 'common/components/forms/custom-inputs/Switch/Switch.types'
import { ZipCodeInputChakraUIPropOverrides } from 'common/components/forms/custom-inputs/ZipCodeInput/ZipCodeInput.types'
import { AvailableNames, PossibleFormValues } from 'global.types'
import { ComponentProps, Dispatch } from 'react'
import { FieldValues, UnpackNestedValue, UseFormMethods } from 'react-hook-form'
import { InputChakraUIPropOverrides } from '../custom-inputs/Input/Input.types'
import { FormDisclaimerChakraUIPropOverrides } from './common/FormDisclaimer/FormDisclaimer.types'

export interface PreDefinedRegexPatterns {
    phone: RegExp
    zip_code: RegExp
    date: {
        isoDateString: RegExp
        preISODateString: RegExp
    }
    email: RegExp
}

export interface ValidationMessages {
    phone: {
        requiredMessage?: string
        regexMessage?: string
    }
    zip_code: {
        requiredMessage?: string
        regexMessage?: string
    }
    email: {
        requiredMessage?: string
        regexMessage?: string
    }
    county: {
        requiredMessage?: string
        regexMessage?: string
    }
    date_of_birth: {
        requiredMessage?: string
        regexMessage?: string
    }
    gender: {
        requiredMessage?: string
        regexMessage?: string
    }
    insurance_plan: {
        requiredMessage?: string
    }
    state: {
        requiredMessage?: string
    }
    total_coverage: {
        requiredMessage?: string
    }
    use_tobacco: {
        requiredMessage?: string
    }
    first_name: {
        requiredMessage?: string
    }
    last_name: {
        requiredMessage?: string
    }
}

export interface FormControlChildrenProps
    extends Omit<UseFormMethods, 'handleSubmit'> {
    preDefinedRegexPatterns: PreDefinedRegexPatterns
    inputCustomValidationHandler: (
        inputName: AvailableNames,
        value: any,
        regexPattern: RegExp,
        message: string
    ) => void
    inputBooleanValidationHandler: (
        inputName: AvailableNames,
        boolean: boolean,
        message: string
    ) => void
}

export interface FormControlWrapperChakraUIPropOverrides {
    fieldSetBox?: Omit<ComponentProps<typeof Box>, 'children'>
    lowerContentBox?: Omit<ComponentProps<typeof Box>, 'children'>
    disclaimerAndBtnWrapperBox?: Omit<ComponentProps<typeof Box>, 'children'>
    formDisclaimer?: FormDisclaimerChakraUIPropOverrides
    button?: Omit<ComponentProps<typeof Button>, 'btnType' | 'brandColor'>
    requiredFieldsText?: Omit<ComponentProps<typeof Text>, 'children'>
}

export interface ProductFormChakraUIPropOverrides {
    formControlWrapperChakraUIPropOverrides?: FormControlWrapperChakraUIPropOverrides
    inputChakraUIPropOverrides?: InputChakraUIPropOverrides
    dateChakraUIPropOverrides?: DateInputChakraUIPropOverrides
    phoneChakraUIPropOverrides?: PhoneInputChakraUIPropOverrides
    ImagePickerChakraUIPropOverrides?: ImagePickerChakraUIPropOverrides
    switchChakraUIPropOverrides?: SwitchChakraUIPropOverrides
    selectChakraUIPropOverrides?: SelectChakraUIPropOverrides
    zipCodeChakraUIPropOverrides?: ZipCodeInputChakraUIPropOverrides
}

export interface setValueParams {
    name: AvailableNames
    value: any
}

export interface FormControlWrapperProps {
    onSubmit?: (
        data: UnpackNestedValue<FieldValues>,
        event?: React.BaseSyntheticEvent
    ) => any | Promise<any>
    btnText?: string
    disclaimerText?: string
    disableChakraStyles?: boolean
    chakraUIPropOverrides?: FormControlWrapperChakraUIPropOverrides
    children(childrenProps: FormControlChildrenProps): React.ReactNode
    id?: string
    isColumn?: boolean
    disableDisclaimer?: boolean
    defaultValues?: PossibleFormValues
    brandColor?: string
    getFormValues?: Dispatch<React.SetStateAction<PossibleFormValues>>
    addNonFormValuesOnSubmit?: setValueParams[]
}

export interface FormControlWrapperPropsExtension
    extends Omit<
        FormControlWrapperProps,
        'chakraUIPropOverrides' | 'id' | 'children'
    > {
    formID?: string
}
