import React from 'react'

const PrdInput = ({ colors, sizes, id }) => {
  const selectColor = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
  }

  return (
    <form>
      <div className='cart-colors'>
        <b>Color: </b>
        {colors.map((color, index) => {
          return (
            <label
              key={index}
              className='btn-custom-radio'
              // style={{ background: `${color}` }}
            >
              {color}
              <input
                type='radio'
                name={`cart${id}`}
                onChange={selectColor}
                value={color}
                // style={{ background: `${color}` }}
              />
            </label>
          )
        })}
      </div>
      <div className='cart-sizes'>
        <b>Size: </b>
        <select>
          {sizes.map((sizes, index) => {
            return (
              <option value={sizes} key={index}>
                {sizes}
              </option>
            )
          })}
        </select>
      </div>
    </form>
  )
}

export default PrdInput
