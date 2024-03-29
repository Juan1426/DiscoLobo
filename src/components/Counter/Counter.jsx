import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

import "./Counter.css"

export const Counter = ({max, cantidad, setCantidad, agregar, agregado}) => {

    const {carrito, eliminarDelCarrito} = useContext(CartContext)

    console.log(agregado)

    //funciones que consumen los botones
    const handleSumar = () => {
        if (cantidad < max) {
            setCantidad(cantidad + 1)
        }
    }
    
    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div className="d-flex">
                {
                    agregado 
                        ?   
                        <div className="container">
                            <Link to="/cart" className="btn btn-success terminarCompra">Terminar mi compra</Link>
                            <Link className="btn btn-danger" to={"/"}>Volver</Link> 

                        </div>
                        :
                        <div className="container counter">
                            <button className="btn btn-primary mx-1" onClick={handleRestar}>-</button>
                            <button className="btn btn-outline-primary" disabled>{cantidad}</button>
                            <button className="btn btn-primary mx-1" onClick={handleSumar}>+</button>
                            <button className="btn btn-outline-primary" onClick={agregar}>Agregar al carrito</button>
                            <Link className="btn btn-danger" to={"/"}>Volver</Link>
                        </div>
                }
            </div>
        </>
    )
}
