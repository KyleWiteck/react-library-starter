import { render } from '@testing-library/react'
import React from 'react'
import FormDisclaimer from './FormDisclaimer'

describe('FormDisclaimer', () => {
    const disclaimer = 'disclaimer text'

    it('should render with default disclaimer', () => {
        const { getByText } = render(
            <FormDisclaimer disclaimerText={disclaimer} />
        )
        const disclaimerElement = getByText(disclaimer)

        expect(disclaimerElement).toBeTruthy()
    })
})
