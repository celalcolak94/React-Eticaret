import React, { useState } from 'react'
import { FaPlus, FaCartPlus, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({ productDetail }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0)

    const decrement = () => {
        if(quantity > 0)
        setQuantity(quantity - 1)
    }

    const increment = () => {
        if(quantity < productDetail?.rating?.count)
        setQuantity(quantity + 1)
    }

    const addBasket = () => {
        dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price, quantity: quantity}))
        window.location.reload()
    }

    return (
        <div className='flex gap-10 my-10'>
            <div className='w-5/12 h-[500px] flex justify-center'>
                <img className='w-[300px] m-auto' src={productDetail?.image} alt="" />
            </div>
            <div className='w-7/12'>
                <div className='text-4xl font-bold'>{productDetail?.title}</div>
                <div className='mt-2 font-bold text-xl'>Category: <span className=' text-red-500'>{productDetail?.category}</span></div>
                <div className='font-bold my-2'>Count: <span className='px-3 bg-blue-600 text-white rounded text-sm font-bold'>{productDetail?.rating?.count}</span></div>
                <div className='text-lg'>{productDetail?.description}</div>
                <div className='font-bold mt-4 flex gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><span className='px-3 bg-green-600 text-white rounded text-sm font-bold'>{productDetail?.rating?.rate}</span></div>
                <div className='text-6xl font-bold mt-8 text-red-600'>{productDetail?.price} <span className='text-4xl'>₺</span></div>
                <div className='flex items-center gap-5 my-5'>
                    <div className='flex items-center gap-3 border p-3'>
                        <FiMinus onClick={decrement} className='cursor-pointer border text-orange-400' />
                        <input className='w-10 text-center text-2xl' type="text" value={quantity} disabled />
                        <FaPlus onClick={increment} className='cursor-pointer border text-orange-400' />
                    </div>
                    <div onClick={addBasket} className='border w-[200px] text-2xl rounded-md bg-green-600 text-white cursor-pointer h-16 flex items-center justify-center'><FaCartPlus className='me-2' />Sepete Ekle</div>
                </div>
            </div>
        </div>
    )
}

export default DetailComp