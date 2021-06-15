import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({setListQuotes}) => {

  const [ quotes, setQuotes] = useState({
    pet:"",
    owner:"",
    date:"",
    time:"",
    symptom:""
  })

  const [error,setError] = useState(false)

  const handleQuotes = (e) =>{
    setQuotes({
      ...quotes,
      [e.target.name] : e.target.value
    })
  }

  const { pet, owner, date, time, symptom } = quotes

  const submitOwner = (e) =>{
    e.preventDefault()

    //validar
    if(pet.trim()==="" || owner.trim()===""|| date.trim() ==="" || time.trim()===""|| symptom.trim()===""){
      setError(true)
      return
    }
    setError(false);
    quotes.id = uuidv4()

    setListQuotes(listQuotes=>[...listQuotes,quotes]);

    setQuotes({
      pet:"",
      owner:"",
      date:"",
      time:"",
      symptom:""
    })
  }
    return (
        <>
          <h2>Crear citas</h2>
          {error ? <p className="alerta-error">Todos los campos son obligatorios</p>:null}
          <form 
          onSubmit={submitOwner}
          >
            <label>Nombre de la Mascota:</label>
            <input 
              type="text"
              name="pet"
              className="u-full-width"
              placeholder="Nombre de la mascota"
              onChange={handleQuotes} 
              value={pet}           
            />
            <label>Nombre del dueño:</label>
            <input 
              type="text"
              name="owner"
              className="u-full-width"
              placeholder="Nombre del Propietario"
              onChange={handleQuotes} 
              value={owner}           
            />
            <label>Fecha:</label>
            <input 
              type="date"
              name="date"
              className="u-full-width"
              onChange={handleQuotes} 
              value={date}        
            />
            <label>Hora:</label>
            <input 
              type="time"
              name="time"
              className="u-full-width"
              onChange={handleQuotes}
              value={time}
           
            />
            <label>Sitomas</label>
            <textarea 
              className="u-full-width"
              name="symptom"
              onChange={handleQuotes}
              value={symptom}> 

            </textarea>
            <button
              className="u-full-width button-primary"
            >Agregar Cita</button>
          </form>   
        </>
    )
}


export default Form
