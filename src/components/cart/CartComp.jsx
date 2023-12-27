import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartComp = ({ cart }) => {
    const dispatch = useDispatch()
    const removeCart = () => {
        dispatch(removeFromCart(cart?.id))
        window.location.reload()
    }
    return (
        <div className='my-10 flex  items-center justify-between'>
            <div className='w-[50px] object-cover'>
                <img className='w-max-[%100] h-auto object-cover' src={cart?.image} alt="" />
            </div>
            <div>
                <div className='text-xl font-bold w-[500px]'>{cart?.title}</div>
                <div>{cart?.description}</div>
            </div>
            <div className='text-xl font-bold'>{cart?.price} ₺ ({cart?.quantity})</div>
            <div onClick={removeCart} className='bg-red-500 text-white w-[100px] cursor-pointer rounded-md h-16 flex items-center justify-center'>
                Ürünü Sil
            </div>
        </div>
    )
}

export default CartComp