import React from 'react'
import NavLink from './NavLink'
import styled from 'styled-components'

const NavigationContainer = styled.div`
  display: flex;
  flex: 1;
  margin-left: 100px;
  margin-right: 100px;
  width: 300px;
  flex-direction: column;
  
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
      flex-direction: column;
      margin: 0 0 20px 0;
  }
  
`

const Navigation = () => (
    <NavigationContainer>
      <NavLink href="/" children={'Home'} />
      <NavLink href="/prophecy" children={'Prophecy'} />
      <NavLink href="/voting" children={'Voting'} />
      <NavLink href="/holders" children={'Tokens'} />
      <NavLink href="/finances" children={'Finances'} />
    </NavigationContainer>
)

export default Navigation
