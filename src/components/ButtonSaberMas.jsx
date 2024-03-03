import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import CardDetalle from "./CardDetalles"


const SaberMas = ({apiDetalle}) => {
    const [detalles,setDetalles] = useState([])
    const [openCard,setOpenCard] = useState(false)

  useEffect(()=> {
    const getDetalle = async () =>{
        const response = await fetch(apiDetalle)
        const data = await response.json()

        setDetalles(data)
    }
    getDetalle()
  }, [])

  const abrirTarjeta = () => {
    if (detalles === ""){

    }else{

        setOpenCard(true)
        
    }

  };

  const cerrarTarjeta = () => {

        setOpenCard(false)
    
  }

    return (
        <>
        <Button variant="success" onClick={abrirTarjeta}>Saber Más</Button>
        {openCard && <CardDetalle detalles={detalles} onClose={cerrarTarjeta} />}
        </>
    )

}
export default SaberMas