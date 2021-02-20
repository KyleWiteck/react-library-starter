import { Text } from '@chakra-ui/react'
import React from 'react'
import { FormDisclaimerProps } from './FormDisclaimer.types'

const FormDisclaimer = (props: FormDisclaimerProps) => {
    // props
    const { disclaimerText, chakraUIPropOverrides, disableChakraStyles } = props

    return (
        <Text
            {...(!disableChakraStyles && {
                m: '0 0.8em',
                fontSize: '1em',
                lineHeight: '1.5em',
                w: '100%',
                color: '#222',
                fontWeight: '400',
                wordBreak: 'break-word',
                ...chakraUIPropOverrides,
            })}
        >
            {disclaimerText}
        </Text>
    )
}

export default FormDisclaimer
