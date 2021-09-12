import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
export const CartScreen = () => {

    const {carrito, eliminarDelCarrito, vaciarCarrito, sumaTotal} = useContext(CartContext)

    return (
        <>
            {/*Cambiar nombre aca?*/}
            <h1>Resumen de compra</h1>

            {carrito.map(prod => (
                <div key={prod.id}>
                    <h3>{prod.nombre}</h3>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Precio: ${prod.precio * prod.cantidad}</p>
                    {/*Reemplazar los iconos de React, no me gustan*/}
                    <BsFillTrashFill onClick={() => eliminarDelCarrito(prod.id)}/>
                </div>
            ))}

            <hr/>
            {/*Encontrar por que no funciona cuando paso el valor "sumaTotal", pero si con la funcion */}
            <h2>Total: ${carrito.reduce((acc, prod) => acc + prod.cantidad * Number(prod.precio), 0)}</h2>
            
            {/*Cuando el Carrito este Vacio deberia aparecer un boton "Volver* al listado de productos*/}

            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
        </>
    )
}