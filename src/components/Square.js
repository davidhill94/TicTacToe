import React from 'react'
import { SquareButton } from './SquareStyles'

const Square = ({ value, onClick}) => {
  return (
    <SquareButton onClick={onClick} value={value}>{value}</SquareButton>
  )
}

export default Square