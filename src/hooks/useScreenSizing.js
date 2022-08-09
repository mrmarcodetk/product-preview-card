import { useState, useEffect } from 'react'
export const useScreenSizing = () => {
  const initialSize = {
    w: window.innerWidth,
    h: window.innerHeight
  }

  const [screenWidth, setScreenWidth] = useState(initialSize.w)
  const [screenHeight, setScreenHeight] = useState(initialSize.h)

  useEffect(() => {
    function handleResize () {
      setScreenWidth(window.innerWidth)
      setScreenHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    screenWidth,
    screenHeight
  }
}
