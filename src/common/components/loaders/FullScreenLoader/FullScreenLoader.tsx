import {
    Box,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
} from '@chakra-ui/react'
import { textHandler } from 'common/tools/helperFunctions'
import disableScroll from 'disable-scroll'
import React, { useEffect, useState } from 'react'
import spinner from '../../../images/spinner.gif'
import { FullScreenLoaderProps } from './FullScreenLoader.types'

const FullScreenLoader = (props: FullScreenLoaderProps) => {
    // props
    const {
        loadStatus,
        modalText,
        addClassName,
        imgSrc,
        chakraUIPropOverrides,
        disableChakraStyles,
        lowerImgSrc,
        failHandler,
        failedErrorMsg,
    } = props
    // state
    const [openState, setOpenState] = useState<boolean>(false)
    const [showImg, setShowImg] = useState<boolean>(false)
    const [showImgTwo, setShowImgTwo] = useState<boolean>(false)
    const [secondaryLoaderScreen, setSecondaryLoaderScreen] = useState<boolean>(
        false
    )

    useEffect(() => {
        const multiTrueValueFilter = Object.values(loadStatus ?? {}).filter(
            (value) => value === true
        )

        if (multiTrueValueFilter.length > 1) {
            console.error(
                'loadStatus should only have one value of true',
                JSON.stringify(loadStatus)
            )
            return
        }

        if (
            loadStatus?.initialLoader &&
            !loadStatus?.failed &&
            !loadStatus?.secondaryLoader
        ) {
            disableScroll.on()
            setOpenState(true)
            setSecondaryLoaderScreen(false)
            return
        }

        if (
            loadStatus?.secondaryLoader &&
            !loadStatus?.initialLoader &&
            !loadStatus?.failed
        ) {
            disableScroll.on()
            setOpenState(true)
            setSecondaryLoaderScreen(true)
            console.error(failedErrorMsg + ' Will try again.')
            return
        }

        if (
            loadStatus?.failed &&
            !loadStatus?.secondaryLoader &&
            !loadStatus?.initialLoader
        ) {
            disableScroll.off()
            setOpenState(false)
            setSecondaryLoaderScreen(false)
            if (failHandler) setTimeout(failHandler, 500)
            console.error(failedErrorMsg)
            return
        }

        if (
            openState &&
            !loadStatus?.failed &&
            !loadStatus?.secondaryLoader &&
            !loadStatus?.initialLoader
        ) {
            disableScroll.off()
            setOpenState(false)
            return
        }
    }, [loadStatus])

    // Unique Functions
    const heading = () => {
        const primary = textHandler(
            'One Moment Please',
            modalText?.heading?.primary
        )
        const secondary = textHandler(
            'Thanks For Your Patience',
            modalText?.heading?.secondary
        )

        if (!secondaryLoaderScreen) {
            return primary
        }

        if (secondaryLoaderScreen) {
            return secondary
        }
    }

    const subHeading = () => {
        const primary = textHandler(
            'Gathering The Details',
            modalText?.subHeading?.primary
        )
        const secondary = textHandler(
            'This Could Take A Few Minutes',
            modalText?.subHeading?.secondary ?? 'This Could Take A Few Minutes'
        )

        if (!secondaryLoaderScreen) {
            return primary
        }

        if (secondaryLoaderScreen) {
            return secondary
        }
    }

    return (
        <Modal
            onClose={() => setOpenState(!openState)}
            isOpen={openState}
            blockScrollOnMount={false}
            {...(!disableChakraStyles && {
                isCentered: true,
                ...chakraUIPropOverrides?.modal,
            })}
        >
            <ModalOverlay
                id="loading_anim"
                className="fullscreen-loader"
                {...(!disableChakraStyles && {
                    ...chakraUIPropOverrides?.modalOverlay,
                })}
            />
            <ModalContent
                className="modal-content__container"
                {...(!disableChakraStyles && {
                    pb: 5,
                    maxW: '100%',
                    h: '100%',
                    d: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    bg: '#f9f9f9',
                    color: '#222',
                    ...chakraUIPropOverrides?.modalContent,
                })}
            >
                <ModalBody
                    {...(!disableChakraStyles && {
                        d: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        h: 'auto',
                        m: 'auto',
                        ...chakraUIPropOverrides?.modalBody,
                    })}
                >
                    <Box
                        className="modal-content__container"
                        {...(!disableChakraStyles && {
                            d: 'flex',
                            flexDir: 'column',
                            alignItems: 'center',
                            h: 'auto',
                            m: 'auto',
                            ...chakraUIPropOverrides?.modalBodyInnerContainerBox,
                        })}
                    >
                        <Image
                            // loading="eager"
                            d={showImg ? 'block' : 'none'}
                            onError={() => setShowImg(false)}
                            onLoad={() => setShowImg(true)}
                            className={
                                addClassName?.img
                                    ? `${addClassName?.img} fullscreen-loader__img load-gif first-anime`
                                    : 'fullscreen-loader__img load-gif first-anime'
                            }
                            src={imgSrc ?? spinner}
                            alt="loader image"
                            {...(!disableChakraStyles && {
                                maxW: '15em',
                                w: '100%',
                                m: '0 auto',
                                ...chakraUIPropOverrides?.image,
                            })}
                        />
                        <Heading
                            as="h2"
                            className={
                                addClassName?.heading
                                    ? `${addClassName?.heading} fullscreen-loader__heading alt-clr first-anime`
                                    : 'fullscreen-loader__heading alt-clr first-anime'
                            }
                            {...(!disableChakraStyles && {
                                fontSize: '1.125em',
                                width: 'auto',
                                ...chakraUIPropOverrides?.heading,
                            })}
                        >
                            {heading()}
                        </Heading>
                        <Heading
                            as="h4"
                            className={
                                addClassName?.subheading
                                    ? `${addClassName?.subheading} fullscreen-loader__subheading alt-clr first-anime`
                                    : 'fullscreen-loader__subheading alt-clr first-anime'
                            }
                            {...(!disableChakraStyles && {
                                fontSize: '0.625em',
                                width: 'auto',
                                textAlign: 'center',
                                ...chakraUIPropOverrides?.subheading,
                            })}
                        >
                            {subHeading()}
                        </Heading>
                        {lowerImgSrc && (
                            <Image
                                // loading="eager"
                                d={showImgTwo ? 'block' : 'none'}
                                onError={() => setShowImgTwo(false)}
                                onLoad={() => setShowImgTwo(true)}
                                className={
                                    addClassName?.lowerImg
                                        ? `${addClassName?.lowerImg} fullscreen-loader__-logo`
                                        : 'fullscreen-loader__-logo '
                                }
                                src={lowerImgSrc}
                                alt="loader image two"
                                {...(!disableChakraStyles && {
                                    maxW: '8em',
                                    w: '100%',
                                    m: '0.5em auto 0',
                                    ...chakraUIPropOverrides?.lowerImage,
                                })}
                            />
                        )}
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default FullScreenLoader
