import { Box, FormLabel, Switch as SwitchComponent } from '@chakra-ui/react'
import React, { useEffect, useImperativeHandle, useRef } from 'react'
import {
    defaultFieldSetStyles,
    defaultFormLabelStyles,
} from '../../../../tools/defaultFieldSetStyles'
import FormValidationMessage from '../common/FormValidationMessage/FormValidationMessage'
import LabelPositionWrapper from '../common/LabelPositionWrapper/LabelPositionWrapper'
// Types
import { SwitchProps } from './Switch.types'

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    (props: SwitchProps, forwardRef) => {
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
            if (innerRef) innerRef.current.focus()
        }, [innerRef])

        // Unique Functions
        const onChangeHandler = (value: string | number | boolean) => {
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
                            htmlFor={`switch-${id}-${index}`}
                            {...(!disableChakraStyles && {
                                ...defaultFormLabelStyles(
                                    labelPosition ?? 'right'
                                ),
                                ...chakraUIPropOverrides?.formLabel,
                            })}
                        >
                            {label}
                        </FormLabel>
                        <SwitchComponent
                            id={`switch-${id}-${index}`}
                            className={
                                customInputClassName ?? 'custom-control-input'
                            }
                            value={value}
                            onBlur={(e) =>
                                onBlur && onBlur((e.target as any).value)
                            }
                            onChange={() => onChangeHandler(value)}
                            name={name}
                            ref={innerRef}
                            {...(!disableChakraStyles && {
                                borderRadius: '4px',
                                color: 'gray',
                                errorBorderColor: 'tomato',
                                ...chakraUIPropOverrides?.switch,
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

export default Switch
