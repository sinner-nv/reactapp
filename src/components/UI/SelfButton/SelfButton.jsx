import React from 'react'
import cs from './SelfButton.module.css'

function SelfButton(props) {

  return (
    <button
      className={cs.btn} {...props}>{props.namebutton}</button>
  )
}

export default SelfButton