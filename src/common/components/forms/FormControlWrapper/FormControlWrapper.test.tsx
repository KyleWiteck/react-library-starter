import { RenderResult } from '@testing-library/react'
import Input from 'common/components/forms/custom-inputs/Input/Input'
import { renderEnvironment } from 'common/tools/TestUtils'
import React from 'react'
import { FieldValues, UnpackNestedValue } from 'react-hook-form'
import FormControlWrapper from './FormControlWrapper'

describe('FormControlWrapper', () => {
    let comp: RenderResult
    let formControlWrapper: HTMLFormElement
    let submittedValue: UnpackNestedValue<FieldValues>
    let onSubmit

    beforeEach(async () => {
        onSubmit = (
            data: UnpackNestedValue<FieldValues>,
            e?: React.BaseSyntheticEvent
        ) => {
            e.preventDefault()

            submittedValue = data
        }

        comp = await renderEnvironment(
            <FormControlWrapper onSubmit={onSubmit} id="form-controller">
                {({ register, errors }) => (
                    <>
                        <Input
                            label="First Name*"
                            name="first_name"
                            placeholder="First Name"
                            id="first_name"
                            ref={register({ required: true })}
                            validationMessage={
                                errors?.first_name &&
                                'Please enter your first name'
                            }
                        />

                        <Input
                            label="Last Name*"
                            name="last_name"
                            placeholder="Last Name"
                            id="last_name"
                            ref={register({ required: true })}
                            validationMessage={
                                errors?.last_name &&
                                'Please enter your last name'
                            }
                        />
                    </>
                )}
            </FormControlWrapper>
        )

        formControlWrapper = comp.container.querySelector('#form-controller')
    })

    it('Should render the input element', () => {
        expect(formControlWrapper).toBeTruthy()
    })

    it('Should render the children passed in', async () => {
        expect(formControlWrapper.children).toHaveLength(2)
    })
})
