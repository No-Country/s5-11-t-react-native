import React, { createContext, useState} from 'react';

export const CartContext = createContext() 

export const CartContextProvider = (props) => {
    
    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const auxCarrito = carrito
    const agregarProductoCarrito = (producto) => {
    
        const indice=auxCarrito.findIndex(i => i.id === producto.id)
        
        //Si el producto que se va a agregar al carrito ya esta en el mismo solo se modifica la cantidad en caso contrario se agrega el nuevo producto

        if (indice >-1 ) {
            const cantidadActual= auxCarrito[indice].cantidad
            let cantidadNueva= cantidadActual + producto.cantidad
            auxCarrito[indice].cantidad =cantidadNueva
            setCarrito(auxCarrito)
            totalProductos(auxCarrito)
            
        } else {
            auxCarrito.push(producto)
            setCarrito(auxCarrito)
            totalProductos(auxCarrito)
            
        }
    }

    //Con la funcion quitarPorductoCarrito se elimina todo un producto del carrito

    const quitarProductoCarrito = (producto) => {
        let indice = auxCarrito.findIndex(prod => prod.id === producto.id)
        auxCarrito.splice(indice, 1)
        setCarrito(auxCarrito)
        totalProductos(auxCarrito)
        console.log(auxCarrito)
        

    }

    const vaciarCarrito = () => {
        setCarrito([])
        
    }

    const totalProductos = (auxCarrito) => {
            const resultado = auxCarrito.reduce((acc,curr) => acc + curr.cantidad, 0)
            setCantidad(resultado)
        }

    

    const total=() => {
        const resultado = auxCarrito.map(valorTotal => valorTotal.cantidad * valorTotal.price).reduce((acc,curr) => acc + curr, 0)
        resultado.toFixed(2)
        return resultado
    }

    const sumarCarrito = (producto) => {
        let indice = auxCarrito.findIndex(prod => prod.id === producto.id)
        auxCarrito[indice].cantidad++
        setCarrito(auxCarrito)
        totalProductos(auxCarrito)
    }

    const restarCarrito = (producto) => {
        let indice = auxCarrito.findIndex(prod => prod.id === producto.id)
        if (auxCarrito[indice].cantidad > 1) {
            auxCarrito[indice].cantidad--
        }
        setCarrito(auxCarrito)
        totalProductos(auxCarrito)
    }

    
    return (
       
            <>
            <CartContext.Provider value = {{sumarCarrito, restarCarrito, cantidad, carrito, agregarProductoCarrito, quitarProductoCarrito, vaciarCarrito, total}}>
            {props.children}
            </CartContext.Provider>
            </>
    );
}