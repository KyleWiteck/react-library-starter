import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react'
import IMask from 'imask'
import React, { ChangeEvent } from 'react'
import {
    defaultFieldSetStyles,
    defaultFormLabelStyles,
    defaultInputStyles,
} from '../../../../tools/defaultFieldSetStyles'
import FormValidationMessage from '../common/FormValidationMessage/FormValidationMessage'
import LabelPositionWrapper from './../common/LabelPositionWrapper/LabelPositionWrapper'
import { PhoneInputProps } from './PhoneInput.types'

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
    (props: PhoneInputProps, forwardRef) => {
        // props
        const {
            id,
            customInputClassName,
            label,
            labelPosition,
            placeholder,
            value,
            onChange,
            onBlur,
            name,
            autoFocus,
            disableChakraStyles,
            chakraUIPropOverrides,
            validationMessage,
        } = props
        // state

        // refs
        const phoneMask = IMask.createMask({
            mask: '{+1} (000) 000-0000',
        })
        // useEffects

        // Unique Functions
        const valueCleaner = (value: string) => {
            let primaryCleaned = value.replace(/[\D+\s()-]+/g, '')

            if (primaryCleaned.startsWith('1')) {
                return (primaryCleaned = primaryCleaned.substring(1))
            }

            return primaryCleaned
        }

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            const value: string = e.target.value
            let primaryCleaned = valueCleaner(value)

            onChange(primaryCleaned)
        }

        const omBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            const value: string = e.target.value
            let primaryCleaned = valueCleaner(value)

            onBlur(primaryCleaned)
        }

        const getMaskedValue = (value: string | undefined) => {
            if (!value) return value
            phoneMask.resolve(value as string)
            return phoneMask.value
        }

        return (
            <FormControl
                as="fieldset"
                id={id && `${id}_form-field`}
                className="form-field"
                {...(!disableChakraStyles && {
                    ...defaultFieldSetStyles,
                    ...chakraUIPropOverrides?.formFieldWrapperFormControl,
                })}
            >
                <LabelPositionWrapper position={labelPosition}>
                    <>
                        {label && (
                            <FormLabel
                                className="form-control__label"
                                {...(!disableChakraStyles && {
                                    ...defaultFormLabelStyles(labelPosition),
                                    ...chakraUIPropOverrides?.formLabel,
                                })}
                            >
                                {label}
                            </FormLabel>
                        )}
                        <Box flexGrow={1}>
                            <Input
                                className={
                                    customInputClassName
                                        ? `form-control ${customInputClassName}`
                                        : 'form-control'
                                }
                                inputMode="numeric"
                                onBlur={omBlurHandler}
                                onKeyDown={(e: any) => {
                                    const keyPressed = e.keyCode || e.which
                                    return (keyPressed > 47 &&
                                        keyPressed < 58) ||
                                        (keyPressed > 95 && keyPressed < 106) ||
                                        (keyPressed > 36 && keyPressed < 41) ||
                                        keyPressed === 8 ||
                                        keyPressed === 9
                                        ? true
                                        : e.preventDefault()
                                }}
                                maxLength={17}
                                placeholder={placeholder ?? '+1 (555) 555-5555'}
                                type="text"
                                id={id ?? undefined}
                                value={getMaskedValue(value) ?? ''}
                                onChange={onChangeHandler}
                                name={name ?? undefined}
                                autoFocus={autoFocus ?? false}
                                isInvalid={validationMessage ? true : false}
                                ref={forwardRef ?? undefined}
                                {...(!disableChakraStyles && {
                                    ...defaultInputStyles,
                                    ...chakraUIPropOverrides?.inputProps,
                                })}
                            />
                        </Box>
                    </>
                </LabelPositionWrapper>
                {validationMessage && (
                    <FormValidationMessage
                        errorMessage={validationMessage}
                        {...(!disableChakraStyles && {
                            ...chakraUIPropOverrides?.formValidationText,
                        })}
                    />
                )}
            </FormControl>
        )
    }
)

export default PhoneInput
