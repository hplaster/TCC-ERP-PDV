import React from 'react'
import styles from './style.module.css'
import PopUpPagamento from '../../components/PopUpPagamento/index.jsx'
import PopUpDesconto from '../../components/PopUpDesconto/index.jsx'

const index = () => {
  return (
    <div>
        <h1>PDV</h1>
        <PopUpPagamento/>
        <PopUpDesconto/>
    </div>
  )
}

export default index