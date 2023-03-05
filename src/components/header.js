import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {HiBars3CenterLeft} from 'react-icons/hi'

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">EXPLORIX</NavLink>
      <Bars />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);  
  z-index: 100;
  position: relative;
` 

const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
cursor:pointer;
`

const Bars = styled(HiBars3CenterLeft)`
display: none;
color: #ccc;

@media screen and (max-width: 768px){
  display: block;
  position: absolute;
} 
`