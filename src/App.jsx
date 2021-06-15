import React, {useState,useEffect} from 'react'
import Form from './components/Form'
import Quotes from './components/Quotes'


const App = () => {

    let initQuotes = JSON.parse(localStorage.getItem("quotes"))

    if(!initQuotes){
       
        initQuotes =[]
    } 


    const [ listQuotes, setListQuotes ] = useState(initQuotes)

    useEffect(() => {
        if(initQuotes){
            localStorage.setItem("quotes",JSON.stringify(listQuotes))
        }else{
            localStorage.setItem("quotes",JSON.stringify([]))
        }
    }, [listQuotes])


    const deleteQuotes = (id)=>{
        const newListQuotes = listQuotes.filter(quote =>quote.id !==id)
        setListQuotes(newListQuotes)
    }



    const titulo = listQuotes.length === 0 ? "No hay cita" :"Administrador de Paciente"
    return (
        <>
            <h1>Administrador de Paciente</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form 
                            setListQuotes = {setListQuotes}
                        />
                    </div>
                    <div className="one-half column">
                        <h2>{titulo}</h2>
                        {
                            listQuotes.map(quotes=>
                                <Quotes 
                                key={quotes.id}
                                deleteQuotes = {deleteQuotes}
                                {...quotes}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default App
