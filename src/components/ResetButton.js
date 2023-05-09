import React from 'react'
import { ResetBtn, ResetWrapper } from './ResetButtonStyles'

const ResetButton = ({resetBoard}) => {
  return (
    <ResetWrapper>
        <ResetBtn onClick={resetBoard}>Reset</ResetBtn>
    </ResetWrapper>
  )
}

export default ResetButton