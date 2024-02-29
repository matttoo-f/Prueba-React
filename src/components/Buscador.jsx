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
        <FormControl type="text" placeholder="Busca un ave" value={search} onChange={HandleSearch}/>
    )
}
export default Buscador