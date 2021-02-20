import { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        screenWidth: undefined,
        screenHeight: undefined,
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return {
        screenWidth: windowSize.screenWidth,
        screenHeight: windowSize.screenHeight,
    }
}

export default useWindowSize
