import { Box, FormLabel, Input as ChakraInput } from '@chakra-ui/react'
import IMask from 'imask'
import React, { ChangeEvent } from 'react'
import {
    defaultFieldSetStyles,
    defaultFormLabelStyles,
    defaultInputStyles,
} from '../../../../tools/defaultFieldSetStyles'
import FormValidationMessage from '../common/FormValidationMessage/FormValidationMessage'
import LabelPositionWrapper from '../common/LabelPositionWrapper/LabelPositionWrapper'
import { InputProps } from './Input.types'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (props: InputProps, forwardRef) => {
        // props
        const {
            id,
            customInputClassName,
            name,
            autoFocus,
            disableChakraStyles,
            label,
            labelPosition,
            validationMessage,
            value,
            onChange,
            chakraUIPropOverrides,
            iMaskCreateMaskConfig,
            placeholder,
            inputType,
            defaultValue,
            onBlur,
        } = props

        // Refs
        const inputMask = iMaskCreateMaskConfig
            ? IMask.createMask(iMaskCreateMaskConfig)
            : null

        const getMaskedValue = (value: string | number | undefined) => {
            if (!value || !inputMask || typeof value !== 'string') return value

            inputMask.resolve(value)
            return inputMask.value
        }

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
            onChange(e)
        const onBlurHandler = (e) => onBlur(e.target.value)
        const valueHandler = onChange ? getMaskedValue(value) ?? '' : undefined

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
                            <ChakraInput
                                className={
                                    customInputClassName
                                        ? `form-control ${customInputClassName}`
                                        : 'form-control'
                                }
                                defaultValue={defaultValue ?? ''}
                                placeholder={placeholder}
                                type={inputType ?? 'text'}
                                id={id ?? undefined}
                                value={valueHandler}
                                onBlur={onBlur && onBlurHandler}
                                onChange={onChange && onChangeHandler}
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
            </Box>
        )
    }
)

export default Input
