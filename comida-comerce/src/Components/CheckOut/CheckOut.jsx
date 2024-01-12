import React, { useContext } from 'react'
import { useState } from 'react';
import CartContext from '../context/CartContext';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

export const CheckOut = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailRepetir, setEmailRepetir] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [mensaje, setMensaje] = useState('');


    const mensajeCompra = ()=>{
        Swal.fire({
            icon: "success",
            title: "¡Gracias por tu compra! Tu orden es:",
            text: ordenId,
            showConfirmButton: false,
            footer: '<a href="/">Volver a inicio</a>',
            allowOutsideClick: false,
          });
    }

    const {carrito, precioTotal, handleVaciar, vaciarCarrito} = useContext(CartContext);
    

    const controladorFormulario = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailRepetir) {
            setError('Por favor complete todos los campos')
            return;
        };

        if (email !== emailRepetir) {
            setError('Los email no coinciden');
            return;
        };
        if (telefono.length < 9) {
            setError('Digite un numero de telefono de minimo 9 digitos')
            return;
        }
        const total = precioTotal()
        const orden = {
            items: carrito.map((p) => ({
                id: p.id,
                title: p.title,
                cantidad: p.cantidad,
            })),
            total: total,
            fecha: new Date,
            nombre,
            apellido,
            telefono,
            email,
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const db = getFirestore();
                const productoRef = doc(db, 'products', productoOrden.id);

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        ).then(() => {
            const db = getFirestore();
            addDoc(collection(db, 'orders'), orden).then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
                .catch((error) => {
                    console.log('No se puede crear la orden', error);
                    setError('Error en la orden');
                });
        })
            .catch((error) => {
                console.log('No se puede actualizar el stock', error);
                setError('No se actuaizo el stock');
            });

        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setEmailRepetir('');
        setMensaje('');
    };


    return (
        <div>
            
            <form className='formulario' onSubmit={controladorFormulario}>
            <h2>Complete el formulario para confirmar compra</h2>

                <div className='div-input'>
                    <label className='lab-check'>Nombre:</label>
                    <input className='input-check' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className='div-input'>
                    <label className='lab-check'>Apellido:</label>
                    <input className='input-check' type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className='div-input'>
                    <label className='lab-check'>Telefono:</label>
                    <input className='input-check' type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className='div-input'>
                    <label className='lab-check'>Email:</label>
                    <input className='input-check' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='div-input'>
                    <label className='lab-check'>Repetir email:</label>
                    <input className='input-check' type="email" value={emailRepetir} onChange={(e) => setEmailRepetir(e.target.value)} />
                </div>

                {error && <p>{error}</p>}
                
                {ordenId && mensajeCompra() && <p>{''} {ordenId} {''} </p>}
                
                <div>
                    <button className='boton-input' type='sumbit'>Enviar</button>
                </div>

            </form>

        </div>

    )
};
export default CheckOut;