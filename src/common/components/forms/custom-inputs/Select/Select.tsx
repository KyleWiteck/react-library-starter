import { Box, FormLabel, Select as ChakraSelect } from '@chakra-ui/react'
import React, { ChangeEvent } from 'react'
import {
    defaultFieldSetStyles,
    defaultFormLabelStyles,
    defaultInputStyles,
} from '../../../../tools/defaultFieldSetStyles'
import FormValidationMessage from '../common/FormValidationMessage/FormValidationMessage'
import LabelPositionWrapper from '../common/LabelPositionWrapper/LabelPositionWrapper'
import { SelectProps } from './Select.types'

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    (props: SelectProps, forwardRef) => {
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
            onBlur,
            chakraUIPropOverrides,
            placeholder,
            options,
            defaultValue,
        } = props

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
                            <ChakraSelect
                                className={
                                    customInputClassName
                                        ? `form-control ${customInputClassName}`
                                        : 'form-control'
                                }
                                id={id ?? undefined}
                                value={value ?? defaultValue ?? ''}
                                onChange={(
                                    e: ChangeEvent<HTMLSelectElement>
                                ) => {
                                    if (e.target.value) onChange(e.target.value)
                                }}
                                onBlur={(e) => onBlur?.(e.target.value)}
                                name={name ?? undefined}
                                autoFocus={autoFocus ?? false}
                                isInvalid={validationMessage ? true : false}
                                placeholder={placeholder}
                                ref={forwardRef}
                                {...(!disableChakraStyles && {
                                    ...defaultInputStyles,
                                    color: !value ? '#555' : '#222',
                                    ...chakraUIPropOverrides?.selectProps,
                                })}
                            >
                                {options.map((option) => (
                                    <option
                                        key={option.label}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </ChakraSelect>
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

export default Select
