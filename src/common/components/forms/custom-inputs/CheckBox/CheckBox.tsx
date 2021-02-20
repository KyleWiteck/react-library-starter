import { Box, Checkbox as CheckboxComponent, FormLabel } from '@chakra-ui/react'
import {
    defaultFieldSetStyles,
    defaultFormLabelStyles,
} from 'common/tools/defaultFieldSetStyles'
import React, { useEffect, useImperativeHandle, useRef } from 'react'
import FormValidationMessage from '../common/FormValidationMessage/FormValidationMessage'
import LabelPositionWrapper from '../common/LabelPositionWrapper/LabelPositionWrapper'
// Types
import { CheckBoxProps } from './CheckBox.types'

const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
    (props: CheckBoxProps, forwardRef) => {
        // props
        const {
            label,
            name,
            id,
            index,
            value,
            onChange,
            validationMessage,
            chakraUIPropOverrides,
            disableChakraStyles,
            labelPosition,
            autoFocus,
            customInputClassName,
            onBlur,
        } = props

        // refs
        const innerRef = useRef<HTMLInputElement>()
        useImperativeHandle(forwardRef, () => innerRef.current)

        useEffect(() => {
            if (!autoFocus) return
            innerRef.current.focus()
        }, [innerRef])

        // Unique Functions
        const onChangeHandler = (value: string | number) => {
            if (innerRef.current.checked) {
                onChange(value)
            } else {
                onChange(undefined)
            }
        }

        return (
            <Box
                as="fieldset"
                id={id && `${id}_form-field`}
                className="form-field"
                {...(!disableChakraStyles && {
                    ...defaultFieldSetStyles,
                    w: 'auto',
                    ...chakraUIPropOverrides?.formFieldWrapperFormControl,
                })}
            >
                <LabelPositionWrapper position={labelPosition ?? 'right'}>
                    <>
                        <FormLabel
                            className="custom-control-label"
                            htmlFor={`checkbox-${id}-${index}`}
                            {...(!disableChakraStyles && {
                                ...defaultFormLabelStyles(
                                    labelPosition ?? 'right'
                                ),
                                ...chakraUIPropOverrides?.formLabel,
                            })}
                        >
                            {label}
                        </FormLabel>
                        <CheckboxComponent
                            id={`checkbox-${id}-${index}`}
                            className={
                                customInputClassName ?? 'custom-control-input'
                            }
                            value={value}
                            onChange={() => onChangeHandler(value)}
                            onBlur={(e) =>
                                onBlur && onBlur((e.target as any).value)
                            }
                            name={name}
                            ref={innerRef}
                            {...(!disableChakraStyles && {
                                borderRadius: '4px',
                                colorScheme: 'gray',
                                errorBorderColor: 'tomato',
                                ...chakraUIPropOverrides?.checkbox,
                            })}
                        />
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

export default CheckBox
