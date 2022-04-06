import React from 'react'
import './Button.style.css'

export function BtnLarge({btnText,click}) {
  return (
    <button  className='btnLarge'  onClick={click}>{btnText}</button>
  )
}
export function BtnSmallL({btnText,click}) {
  return (
    <button  className='btnSmallL' onClick={click}>{btnText}</button>
  )
}
export function BtnSmallD({btnText,click}) {
  return (
    <button  className='btnSmallD' onClick={click}>{btnText}</button>
  )
}

