import React from 'react'
import { BoardContainer } from './BoardStyles'
import Square from './Square'

const Board = ({board, onClick}) => {
  return (
    <BoardContainer>
        {board.map((value, index) => {
            return <Square key={index} value={value} onClick={() => value === null && onClick(index)} />
        })}
    </BoardContainer>
  )
}

export default Board