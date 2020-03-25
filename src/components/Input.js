import styled from 'styled-components'

const Input = styled.input`
      outline: none;
      display: block;
      background: #eee;
      width: 100%;
      border: 0;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 12px 20px;
      color:  #333;

      &:focus {
        color: $dark-gray;
      }
`

export default Input
