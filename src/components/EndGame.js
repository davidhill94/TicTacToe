import React from 'react'
import { EndGameContainer, EndGameText } from './EndGameStyles'

const EndGame = ({ winner }) => {
    return (
        <EndGameContainer winner={winner}>
            <EndGameText>Game Over - {winner}</EndGameText>
        </EndGameContainer>
    )
}

export default EndGame