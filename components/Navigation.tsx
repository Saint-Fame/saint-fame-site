import React from 'react'
import NavLink from './NavLink'
import styled from 'styled-components'

const NavigationContainer = styled.div`
  display: flex;
  flex: 1;
  margin-left: 100px;
  flex-direction: column;
  
  width: 300px;
  margin-right: 100px;
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
