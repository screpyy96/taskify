import React from 'react'
import './styles.css'

const InputField = () => {
  return (
    <form className='input'>
      <input className='input__box' type="text" placeholder='Enter a task' />
      <button className='input__submit' type='submit'>Submit</button>
    </form>
  )
}

export default InputField
