import React from 'react';
import styled from "styled-components";
import {plPL} from "@material-ui/core/locale";

const Button = styled.button`
  color: #fff !important;
  text-decoration: none;
  padding: 15px 25px;
  font-size: 1em;
  border-radius: 5px;
  transition: all .3s;
  white-space: nowrap;
  border:none;
  cursor: pointer;
  background: ${props => props.theme.main};
  &:hover {
    background: ${props => props.theme.mainLighter};
  }
`
Button.defaultProps = {
  theme: {
    main: "#351b76",
    mainLighter: "#4924a3"
  }
}

export default Button;
