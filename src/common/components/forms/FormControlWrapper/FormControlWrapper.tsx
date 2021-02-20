import { Box, Text } from '@chakra-ui/react'
import Button from 'common/components/Button/Button'
import { AvailableNames, PossibleFormValues } from 'global.types'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import FormDisclaimer from './common/FormDisclaimer/FormDisclaimer'
import {
    FormControlChildrenProps,
    FormControlWrapperProps,
    PreDefinedRegexPatterns,
} from './FormControlWrapper.types'

export { Controller }

const FormControlWrapper = (props: FormControlWrapperProps) => {
    // props
    const {
        children,
        onSubmit,
        btnText,
        disclaimerText,
        disableChakraStyles,
        chakraUIPropOverrides,
        id,
        isColumn,
        disableDisclaimer,
        defaultValues,
        getFormValues,
        brandColor,
        addNonFormValuesOnSubmit,
    } = props
    // state
    const { handleSubmit, ...useFormProperties } = useForm<PossibleFormValues>(
        defaultValues && { defaultValues: defaultValues }
    )

    const internalOnSubmit = (data: { [x: string]: any }) => {
        const submitData = { ...data }

        if (addNonFormValuesOnSubmit) {
            addNonFormValuesOnSubmit.forEach((valueSet) => {
                if (valueSet) submitData[valueSet.name] = valueSet.value
            })
        }
        console.log(submitData)

        if (getFormValues) getFormValues(useFormProperties.getValues())
        if (onSubmit) onSubmit(submitData)
    }

    const regexPatterns: PreDefinedRegexPatterns = {
        phone: /^\d{10}$/i,
        zip_code: /^(?!0{5})[0-9]{5}$/i,
        date: {
            isoDateString: /^([0-9]{4}-[0-9]{2}-[0-9T]{5}[:][0-9]{2}[:][0-9]{2}[.][0-9A-Z]{4})$/i,
            preISODateString: /^\d{1,7}$/i,
        },
        email: /^[^@]+@[^.]+\.[^_]{2,}$/i,
    }

    const validator = (value: any, regexPattern: RegExp) => {
        return value.match(regexPattern) ? false : true
    }

    const inputCustomValidationHandler = (
        inputName: AvailableNames,
        value: any,
        regexPattern: RegExp,
        message: string
    ) => {
        if (value && validator(value, regexPattern))
            useFormProperties.setError(inputName, {
                type: 'manual',
                message: message,
            })
        else if (value) useFormProperties.clearErrors([inputName])
    }

    const inputBooleanValidationHandler = (
        inputName: AvailableNames,
        boolean: boolean,
        message: string
    ) => {
        if (boolean)
            useFormProperties.setError(inputName, {
                type: 'manual',
                message: message,
            })
        else useFormProperties.clearErrors([inputName])
    }

    const childrenProps: FormControlChildrenProps = {
        ...useFormProperties,
        preDefinedRegexPatterns: regexPatterns,
        inputCustomValidationHandler: inputCustomValidationHandler,
        inputBooleanValidationHandler: inputBooleanValidationHandler,
    }

    return (
        <form id={id} onSubmit={handleSubmit(internalOnSubmit)}>
            <Box
                _last={!isColumn && { m: '0 auto 1.8em 0' }}
                {...(!disableChakraStyles && {
                    _last: !isColumn && { m: '0 auto 1.8em 0' },
                    d: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    w: '100%',
                    flexDir: isColumn ? 'column' : undefined,
                    ...chakraUIPropOverrides?.fieldSetBox,
                })}
            >
                {children(childrenProps)}
            </Box>
            <Box
                {...(!disableChakraStyles && {
                    w: '100%',
                    pt: '2em',
                    fontSize: 'inherit',
                    ...chakraUIPropOverrides?.lowerContentBox,
                })}
            >
                {!disableDisclaimer ? (
                    <FormDisclaimer
                        disclaimerText={disclaimerText}
                        chakraUIPropOverrides={
                            chakraUIPropOverrides?.formDisclaimer
                        }
                        disableChakraStyles={disableChakraStyles}
                    />
                ) : null}
                {/* Replace with btn component */}
                {/* Add chakra styles to new btn component */}
                <Box mt={disableDisclaimer ? 0 : '3.8em'}>
                    <Button
                        btnType="submit"
                        brandColor={brandColor}
                        {...(!disableChakraStyles && {
                            btnText: btnText ?? 'Find Your Plan',
                            fontSize: '0.875em',
                            ...chakraUIPropOverrides?.button,
                        })}
                    />
                    <Text
                        {...(!disableChakraStyles && {
                            fontSize: '0.875em',
                            ...chakraUIPropOverrides?.requiredFieldsText,
                        })}
                    >
                        * Required Fields{' '}
                    </Text>
                </Box>
            </Box>
        </form>
    )
}

export default FormControlWrapper
