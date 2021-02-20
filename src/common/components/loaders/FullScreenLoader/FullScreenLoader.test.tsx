import { waitFor } from '@testing-library/dom'
import { renderEnvironment } from 'common/tools/TestUtils'
import React from 'react'
import FullScreenLoader from './FullScreenLoader'

describe('FullScreenLoader', () => {
    it('should load initial load screen', async () => {
        const { getByText, getByTestId } = await renderEnvironment(
            <FullScreenLoader
                configName="development"
                loadStatus={{
                    initialLoader: true,
                    secondaryLoader: false,
                    failed: true,
                }}
                failedErrorMsg="The Api Failed"
            />
        )

        expect(getByTestId('component-wrapper')).toBeTruthy()

        waitFor(() => expect(getByText('One Moment Please')).toBeTruthy())
    })

    it('should load secondary load screen', async () => {
        const { getByText, getByTestId } = await renderEnvironment(
            <FullScreenLoader
                configName="development"
                loadStatus={{
                    initialLoader: false,
                    secondaryLoader: true,
                    failed: true,
                }}
                failedErrorMsg="The Api Failed"
            />
        )

        expect(getByTestId('component-wrapper')).toBeTruthy()

        waitFor(() =>
            expect(getByText('Thanks For Your Patience')).toBeTruthy()
        )
    })

    it('should not load when failed', () => {
        const { getByTestId } = renderEnvironment(
            <FullScreenLoader
                configName="development"
                loadStatus={{
                    initialLoader: false,
                    secondaryLoader: false,
                    failed: true,
                }}
                failedErrorMsg="The Api Failed"
            />
        )

        expect(getByTestId('component-wrapper').innerHTML).toBeFalsy()
    })
})
