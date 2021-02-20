import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import IMask from 'imask'
import React, { useImperativeHandle, useRef } from 'react'
import {
    defaultFieldSetStyles,
    defaultFormLabelStyles,
    defaultInputStyles,
} from '../../../../tools/defaultFieldSetStyles'
import FormValidationMessage from '../common/FormValidationMessage/FormValidationMessage'
import LabelPositionWrapper from '../common/LabelPositionWrapper/LabelPositionWrapper'
import { DateInputProps } from './DateInput.types'

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
    (props: DateInputProps, forwardRef) => {
        // props
        const {
            id,
            customInputClassName,
            label,
            labelPosition,
            value,
            limitUpperYear,
            limitLowerYear,
            onChange,
            name,
            onBlur,
            autoFocus,
            disableChakraStyles,
            chakraUIPropOverrides,
            validationMessage,
            placeholder,
        } = props
        // state

        // refs
        const dateInput = useRef<HTMLInputElement | null>(null)
        useImperativeHandle(forwardRef, () => dateInput.current)
        const dateMask = IMask.createMask({
            mask: Date,
            pattern: '`m{/}`d{/}`YYYY',
            blocks: {
                m: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 12,
                    maxLength: 2,
                },
                d: {
                    mask: IMask.MaskedRange,
                    from: 1,
                    to: 31,
                    maxLength: 2,
                },
                Y: {
                    mask: IMask.MaskedRange,
                    from: limitLowerYear ? limitLowerYear : 1900,
                    to: limitUpperYear ? limitUpperYear : 2000,
                    maxLength: 4,
                },
            },
        })

        // Unique Functions
        const convertStringToDateObject = (str: string): Date => {
            if (str.length !== 8) return
            // str in the form of 'mmddyyyy'
            const m = str.substr(0, 2)
            const d = str.substr(2, 2)
            const y = str.substr(4, 4)

            const dateObject = new Date(`${y}, ${m}, ${d}`)
            if (dateObject.toISOString() === 'Invalid Date') return
            return dateObject
        }

        const valueOutputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault()
            const eTargetValue: string = e.target.value
            const unmaskedValue = eTargetValue.replace(/[\D]+/g, '')

            if (unmaskedValue.length === 8) {
                const dateObject = convertStringToDateObject(unmaskedValue)
                return dateObject.toISOString()
            }
            return unmaskedValue
        }

        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(valueOutputHandler(e))
        }

        const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onBlur(valueOutputHandler(e))
        }

        const updateInputValue = (passedInputValue: string | undefined) => {
            if (!passedInputValue) return ''
            let inputValueString = passedInputValue

            if (passedInputValue.length > 8) {
                // This is an ISO date string, so convert to mmddyyyy string
                const dateObject = new Date(passedInputValue)
                let m: string | number = dateObject.getMonth() + 1
                m = m.toString()
                m = m.length === 1 ? '0' + m : m

                let d = dateObject.getDate().toString()
                d = d.length === 1 ? '0' + d : d

                let y = dateObject.getFullYear().toString()

                inputValueString = `${m}${d}${y}`
            }
            dateMask.resolve(inputValueString)
            return dateMask.value
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
                        <Input
                            ref={dateInput}
                            className={
                                customInputClassName
                                    ? `form-control ${customInputClassName}`
                                    : 'form-control'
                            }
                            maxLength={10} // including mask
                            placeholder={placeholder ?? '__/__/____'}
                            type="text"
                            id={id ?? undefined}
                            value={updateInputValue(value)}
                            onChange={onChangeHandler}
                            onBlur={onBlurHandler}
                            name={name ?? undefined}
                            inputMode={'numeric'}
                            autoFocus={autoFocus ?? false}
                            {...(!disableChakraStyles && {
                                ...defaultInputStyles,
                                ...chakraUIPropOverrides?.inputProps,
                            })}
                            onKeyDown={(e: any) => {
                                const keyPressed = e.keyCode || e.which
                                return (keyPressed > 47 && keyPressed < 58) ||
                                    (keyPressed > 95 && keyPressed < 106) ||
                                    (keyPressed > 36 && keyPressed < 41) ||
                                    keyPressed === 8 ||
                                    keyPressed === 9
                                    ? true
                                    : e.preventDefault()
                            }}
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
            </FormControl>
        )
    }
)

export default DateInput
