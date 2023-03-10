import React, { useEffect, useState } from 'react'

function Funcional() {
    
    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState("Martin");
    const [apellido, setApellido] = useState("San jose");

    useEffect(() => {
      
        const timerID = setInterval(() => {
            tick();
          }, 1000);
    
      return () => {
        clearInterval(timerID);
      }
    },[])

    function tick() {
        setFecha(new Date())
        setEdad(prevEdad => prevEdad + 1)
    }
    
    return (
    <div>
        <h2>Hora actual: {fecha.toLocaleTimeString()} </h2>
        <h3>{ `${nombre}  ${apellido}` }</h3>
        <h1>Edad: {edad} </h1>
    </div>
  )
}

export default Funcional