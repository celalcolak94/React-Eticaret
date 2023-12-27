import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`products/${product?.id}`)} className='w-[344px] h-[400px] pb-2 ms-4 mb-4 border rounded-md relative cursor-pointer'>
            <div className='text-xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{product?.price} <span className=' text-lg'>TL</span></div>
            <div className='w-[200px] h-[300px] flex text-center justify-center m-auto'>
                <img className='w-[100%] h-auto object-cover m-auto' src={product?.image} alt="" />
            </div>
            <div className='text-center px-3 mt-3 text-base font-bold'>{product?.title}</div>
        </div>
    )
}

export default Product