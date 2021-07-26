import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x:0,
        y:0
    })
    const {x, y} = coords;

    useEffect(() => {
        
        const mouseMove = (e) =>{
            // console.log(e)
            const coords={
                x: e.x,
                y: e.y
            }
            setCoords(coords)
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>MESSAGE.JS</h3>

            <h6>COORDENADAS DEL MOUSE: x: {x}, y:{y}</h6>
        </div>
    )
}
