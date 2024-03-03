import { useState } from "react"
import { FormControl } from "react-bootstrap"


const Buscador = ({onSearch}) => {

    const [search, setSearch] = useState("")

    const HandleSearch = (e)=>{
        const busqueda = e.target.value
        setSearch(busqueda)
        onSearch(busqueda)
    }
    return (
        <input type="text" placeholder="Busca un ave" value={search} onChange={HandleSearch} className="input"/>
    )
}
export default Buscador