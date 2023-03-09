    import React, { useState, useEffect } from 'react'
    import '../Style/SquareStyle.css'
    
    const Square = () => {

        let red = 0;
        let green = 0;
        let blue = 0;
        let rgbBackground = `rgb(${red}, ${green}, ${blue})`;

        const [colorBackground, setColorBackground] = useState(rgbBackground);
        const [isHovered, setIsHovered] = useState(false);
        const [doubleClick, setDoubleClick] = useState(false);

        useEffect(() => {
          const interval = setInterval(() => {
            if(isHovered && !doubleClick){
            const randomRed = Math.floor(Math.random() * 255);
            const randomGreen = Math.floor(Math.random() * 255);
            const randomBlue = Math.floor(Math.random() * 255);
            const randomColorChange = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            setColorBackground(randomColorChange)
            }
          }, 1000)
        
          return () => {
            clearInterval(interval)
          }
        }, [isHovered, doubleClick])

        const handleDoubleClick = () => {
            setDoubleClick(true);

        }
        const handleMouseLeave = () => {
            setIsHovered(false);
            setDoubleClick(false);
        }

      return (
        <>
        <div className='square' style={{ backgroundColor: colorBackground }} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)} onClick={handleDoubleClick} onMouseLeave={handleMouseLeave}>

        </div>
      

        </>
      )
    }
    
    export default Square