import React from 'react'

const PrdInput = () => {
  const selectColor = (msg) => {
    console.log(msg)
  }

  return (
    <form>
      <div className='product-overview-content__item__color'>
        <h4>Color</h4>
        <label>
          black
          <input
            type='radio'
            name='color'
            onChange={() => selectColor('black')}
          />
        </label>
        <label>
          white
          <input
            type='radio'
            name='color'
            onChange={() => selectColor('white')}
          />
        </label>
        <label>
          blue
          <input
            type='radio'
            name='color'
            onChange={() => selectColor('blue')}
          />
        </label>
      </div>
      <div className='product-overview-content__item__size'>
        <h4>Size</h4>
        <select>
          <option value='xxl'>xxl</option>
          <option value='xl'>xl</option>
          <option value='l'>l</option>
          <option value='m' checked>
            m
          </option>
          <option value='sm'>sm</option>
          <option value='xsm'>xsm</option>
        </select>
      </div>
    </form>
  )
}

export default PrdInput
