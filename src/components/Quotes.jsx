import React from 'react'


const Quotes = ({id,pet,owner,date,time,symptom,deleteQuotes}) => {
  return (
    <div className="cita">
      <p>Mascota: <span>{pet}</span></p>
      <p>Dueño: <span>{owner}</span></p>
      <p>Fecha: <span>{date}</span></p>
      <p>Hora: <span>{time}</span></p>
      <p>Sintomas: <span>{symptom}</span></p>

      <button
      className="button eliminar u-full-width"
      onClick={()=>deleteQuotes(id)}
      
      >Eliminar</button>
    </div>
  )
}


export default Quotes

