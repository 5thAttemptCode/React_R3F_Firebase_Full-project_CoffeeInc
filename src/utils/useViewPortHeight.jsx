import { useEffect } from 'react'


//avoid scroll resize in Safari
const useViewportheight = () => {
    useEffect(() => {
        const setVh = () => {
            let vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }

        setVh()

        window.addEventListener("resize", setVh)

        return () => {
            window.removeEventListener("resize", setVh)
        }
    }, [])
}

export default useViewportheight