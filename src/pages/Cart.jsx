import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/cartSlice'
import CartComp from '../components/cart/CartComp'

const Carts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { carts, itemCount, totalAmount } = useSelector(state => state.carts)

  console.log(carts, itemCount, totalAmount, "cart")

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div>
      {
        carts?.length > 0 ?
          <div>
            {
              carts?.map((cart, index) => (
                <CartComp key={index} cart={cart} />
              ))
            }
            <div className='flex items-center justify-end text-2xl'>
              TOPLAM TUTAR : <span className='font-bold text-3xl ml-1'>{totalAmount} ₺</span>
            </div>
          </div> :
          <div>
            Kartınız boş...
          </div>
      }
    </div>
  )
}

export default Carts