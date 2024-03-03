import {Button } from "react-bootstrap"
import Canto from "./SonidoCanto"
import { useEffect, useState } from "react"


const CardDetalle = ({detalles,onClose}) => {

  const [isOpen, setIsOpen] = useState(false)

    const ImgStyle = {
        height: '20em',
    }

    useEffect(() => {

      setIsOpen(!!detalles)
    }, [detalles])

    const handleCerrar = () => {
      onClose();
    }
    return (
        <>
        {detalles && (
        <div  className={`card-container ${isOpen ? "open" : "closed"}`}>
          <div className="card-conten">
            <div className="card-img">
              <img
                className="img-card.detalle"
                style={ImgStyle}
                src={detalles.images.main}
                alt=""
              />
            </div>
            <div className="main-card">
              <h3>{detalles.name.spanish}</h3>

              <p className="p-detalle">{detalles.habitat}</p>
              <hr />
              <div className="botones">
                {detalles.audio && detalles.audio.file && (
                  <Canto urlSonido={detalles.audio.file} />
                )}
                <Button variant="danger" onClick={handleCerrar}>
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
        </>
    )

}
export default CardDetalle