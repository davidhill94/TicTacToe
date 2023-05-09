import React from 'react'
import { OScore, ScoreboardContainer, XScore } from './ScoreboardStyles'

const Scoreboard = ({scores, player}) => {
    const {scoreX, scoreO} = scores;
  return (
    <ScoreboardContainer>
        <XScore player={player}>Player X - {scoreX}</XScore>
        <OScore player={player}>Player O - {scoreO}</OScore>
    </ScoreboardContainer>
  )
}

export default Scoreboard