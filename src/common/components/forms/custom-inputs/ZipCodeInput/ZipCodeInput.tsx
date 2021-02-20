import { Box, FormLabel, Input } from '@chakra-ui/react'
import IMask from 'imask'
import React from 'react'
import {
    defaultFieldSetStyles,
    defaultFormLabelStyles,
    defaultInputStyles,
} from '../../../../tools/defaultFieldSetStyles'
import FormValidationMessage from '../common/FormValidationMessage/FormValidationMessage'
import LabelPositionWrapper from './../common/LabelPositionWrapper/LabelPositionWrapper'
// Styles
// import "./ZipCodeInput.scss";
// Types
import { ZipCodeInputProps } from './ZipCodeInput.types'

const ZipCodeInput = React.forwardRef<HTMLInputElement, ZipCodeInputProps>(
    (props: ZipCodeInputProps, forwardRef) => {
        // props
        const {
            id,
            name,
            value,
            label,
            labelPosition,
            onChange,
            onBlur,
            customInputClassName,
            autoFocus,
            disableChakraStyles,
            chakraUIPropOverrides,
            validationMessage,
            placeholder,
            ...rest
        } = props

        // refs
        const zipCodeMask = IMask.createMask({
            mask: '00000',
        })

        // Unique Functions
        const onChangeHandler = (e: any) => {
            const eValue: string = e.target.value
            onChange(eValue)
        }

        const getMaskedValue = (value: string) => {
            if (!value) return value

            zipCodeMask.resolve(value as string)
            return zipCodeMask.value
        }

        return (
            <Box
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
                                id={id && `${id}_input`}
                                name={name ?? undefined}
                                placeholder={placeholder ?? '_____'}
                                maxLength={5}
                                onBlur={(e) => onBlur(e.target.value)}
                                onKeyDown={(e: any) => {
                                    const keyPressed = e.keyCode || e.which
                                    return (keyPressed > 47 &&
                                        keyPressed < 58) ||
                                        (keyPressed > 95 && keyPressed < 106) ||
                                        (keyPressed > 36 && keyPressed < 41) ||
                                        keyPressed === 8 ||
                                        keyPressed === 9 ||
                                        keyPressed === 46
                                        ? true
                                        : e.preventDefault()
                                }}
                                value={getMaskedValue(value) ?? ''}
                                onChange={onChangeHandler}
                                type="text"
                                inputMode={'numeric'}
                                autoFocus={autoFocus ?? false}
                                isInvalid={validationMessage ? true : false}
                                ref={forwardRef}
                                _placeholder={{ fontSize: '0.625em' }}
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
            </Box>
        )
    }
)

export default ZipCodeInput
