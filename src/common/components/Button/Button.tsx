import { Button as ChakraButton } from '@chakra-ui/react'
import { fromString } from 'css-color-converter'
import React, { ComponentProps } from 'react'
import { ButtonProps } from './Button.types'

const Button = (props: ButtonProps) => {
    // props
    const {
        btnText,
        btnType,
        appendToBtnId,
        brandColor,
        onClickHandler,
        anchorHref,
        chakraUIPropOverrides,
        disableChakraStyles,
    } = props

    const hoverColorParamBreakDown = fromString(brandColor ?? '#222')
        .toHslString()
        .replace(/([()%hsl ])/g, '')
        .split(',')

    const hoverColorParams = hoverColorParamBreakDown.map((param, index) => {
        if (index === 2) {
            if (+param < 20) {
                return +param + 20
            } else {
                return +param - 20
            }
        }
        return +param
    })

    const btnTypeAttribute = btnType ? btnType : 'button'
    const defaultStyles = {
        _hover: {
            backgroundColor: `hsl(${hoverColorParams[0]}, ${hoverColorParams[1]}%, ${hoverColorParams[2]}%)`,
            color: '#f0f0f0',
        },
        maxWidth: '15em',
        margin: '0.625em auto',
        boxShadow: 'inset 0 2px 0 #b3b3b3,0 2px 3px rgba(0,0,0,.2)',
        border: '1px solid #fff',
        transition: 'all 0.2s ease',
        color: '#ffffff',
        fontFamily: 'sans-serif',
        fontWeight: 400,
        pr: 0,
        pl: 0,
        h: '3em',
        padding: '0.6em 1.3em !important',
        borderRadius: '0.3em',
        fontSize: '1.25em',
        lineHeight: '1.5',
        ...chakraUIPropOverrides?.button,
    } as ComponentProps<typeof ChakraButton>

    return (
        <>
            {anchorHref ? (
                <a
                    href={anchorHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-anchor-wrapper"
                    aria-label={btnText}
                    onClick={onClickHandler ?? undefined}
                >
                    <ChakraButton
                        id={`apply-button-result-${appendToBtnId}`}
                        className="apply-btn form-btn"
                        type={btnTypeAttribute}
                        backgroundColor={brandColor ?? '#222'}
                        {...(!disableChakraStyles && defaultStyles)}
                    >
                        {btnText}
                    </ChakraButton>
                </a>
            ) : (
                <ChakraButton
                    id={`apply-button-result-${appendToBtnId}`}
                    className="apply-btn form-btn"
                    type={btnTypeAttribute}
                    onClick={onClickHandler ?? undefined}
                    backgroundColor={brandColor ?? '#222'}
                    {...(!disableChakraStyles && defaultStyles)}
                >
                    {btnText}
                </ChakraButton>
            )}
        </>
    )
}

export default Button
