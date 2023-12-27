import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice'

const Category = ({setCategory}) => {

  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  

  return (
    <div className='bg-gray-100 px-2'>
      <div className='border-b p-2 px-10 text-lg font-bold'>KATEGORİ</div>
      {
        categories?.map((category,index) => (
          <div onClick={() => setCategory(category)} className='text-base cursor-pointer hover:bg-gray-200 p-2' key={index}>{category}</div>
        ))
      }
    </div>
  )
}

export default Category