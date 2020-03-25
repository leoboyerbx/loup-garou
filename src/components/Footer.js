import React from 'react'
import styled from "styled-components";
import Button from "./Button";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  color: #fff;
  background-color: ${props => props.theme.main};
  text-align: center;
`

FooterContainer.defaultProps = {
  theme: {
    main: "#351b76",
    mainLighter: "#4924a3"
  }
}

const Footer = () => {
  return (
      <FooterContainer>
        &copy; Les MMI sont de sortie
      </FooterContainer>
  )
}


export default Footer
