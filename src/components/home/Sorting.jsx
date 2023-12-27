import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 p-5 flex items-center justify-end my-3'>
        <select defaultValue={1} onChange={e => setSort(e.target.value)} className='bg-white px-8 py-3'>
            <option disabled value="1">SEÇİNİZ</option>
            <option value="inc">Fiyata Göre Artan</option>
            <option value="dec">Fiyata Göre Azalan</option>
        </select>
    </div>
  )
}

export default Sorting