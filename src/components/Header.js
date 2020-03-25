import React from 'react'
import styled from "styled-components";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWolfPackBattalion } from '@fortawesome/free-brands-svg-icons'

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  color: #fff;
  background-color: ${props => props.theme.main};
`
HeaderContainer.defaultProps = {
  theme: {
    main: "#351b76",
    mainLighter: "#4924a3"
  }
}

const Header = () => {
  return (
      <HeaderContainer>
        <FontAwesomeIcon icon={ faWolfPackBattalion } /> Loups-garous de Thiercellieux
      </HeaderContainer>
  )
}


export default Header
