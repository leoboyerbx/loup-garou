import React from 'react';
import styled from "styled-components";
import {plPL} from "@material-ui/core/locale";

const color = props => {
  const palette =  {
    color1: props.primary ? '#351b76' : '#3b3b3b',
    color2: props.primary ? '#5040a2' : '#636363'
  }
  return `
    background: ${palette.color1};
    background: linear-gradient(-110deg, ${palette.color2} 30%, ${palette.color1} 70%);
  `
}

const Button = styled.button`
  color: #fff !important;
  text-decoration: none;
  padding: 15px 25px;
  font-size: 1em;
  border-radius: 5px;
  transition: all .3s;
  white-space: nowrap;
  background-size: 200%;
  ${color}
  background-position: right;
  border:none;
  cursor: pointer;
  &:hover {
    background-position: left;
  }
`

// const Button = (props) => {
//   const { onClick, children } = props;
//   return (<button onClick={onClick}> { children }</button>);
// }

export default Button;
