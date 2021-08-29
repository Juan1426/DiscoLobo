import React, {useState,useEffect } from "react"
import { useParams } from 'react-router-dom'
import pedirDatos from "../../helpers/pedirDatos"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

        /*inicio los estados*/
 
        const { itemId } = useParams()        
        const [item, setItem] = useState(null)
        const [loading, setLoading] = useState(false)
        
        useEffect(() => {

            setLoading(true)
            
            pedirDatos()
                .then( res=> {
                    setItem(res.find(prod => prod.id=== parseInt(itemId))) /* lo tengo que parsear porque en el array ID es tipo number, pero el param es String, lo tengo que igualar para comparar*/
                })
                .finally(() => {setLoading(false)})
                

        }, [itemId]) /*Se monta el componente cuando registra cambios en ItemId. Si no pongo nada, solo lo hace una vez*/

        return (
            <div>
                {
                    loading
                        ? <h2>Cargando...</h2> /*ARMAR COMPONENTE DE CARGANDO ANIMADO*/
                        : <ItemDetail {...item}/> /*le mando un spread de item para que lo recinba como parametros separados*/
                    
                }
            </div>
        )

}

export default ItemDetailContainer