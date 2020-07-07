import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 100px;
  background: #5da5a4;
  position: relative;
  overflow: hidden;
`

const HeaderELement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #64babb;
  
  height: 270px;
  width: 600px;
  border-radius: 135px;

  transform: rotate(-40deg);
`

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <HeaderELement style={{top: '-220px', left: '-75px'}} />
        <HeaderELement style={{top: '-300px', left: '325px'}} />
        <HeaderELement style={{top: '20px', left: '575px'}} />
        <HeaderELement style={{top: '20px', left: '975px'}} />
      </div>
    </StyledHeader>
  )
}
