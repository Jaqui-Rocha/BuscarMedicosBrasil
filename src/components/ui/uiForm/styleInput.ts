import styled from 'styled-components'

const Div = styled.div`
  position: relative;
  margin-bottom: 35px;

  &.active {
    input {
      border-color: #00c247;

      ~ label {
        color: #00c247;
      }
    }
  }
  &.error {
    input {
      border-color: red !important;

      ~ label {
        color: red !important;
      }
    }
  }
`

const Label = styled.label`
  position: absolute;
  line-height: 19.6px;
  font-size: 14px;
  letter-spacing: 0.2px;
  top: -9px;
  left: 10px;
  background: #fff;
  padding: 0 8px;
  color: #757575;
  margin: 1rem 6.5rem;
`

const Input = styled.input`
  border: 1px solid #e0e0e0;
  height: 56px;
  background-color: #fff;
  border-radius: 16px;
  width: 70%;
  padding: 0 16px;
  outline: none;
  color: #757575;
  margin: 1rem 6.5rem;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus,
  &:hover {
    border-color: #00c247;
    outline-color: #00c247;

    ~ label {
      color: #00c247;
    }
  }
`

const Icon = styled.div`
  position: absolute;
  right: 130px;
  top: 50%;
  margin-top: -12px;
  color: #bdbdbd;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`
const Button = styled.button`
  height: 56px;
  .verdeEscuro {
    color: #046639;
    width: 400px;
  }
  .verdeClaro {
    color: #00c247;
    width: 262px;
  }
`
export default {
  Div,
  Label,
  Input,
  Icon,
  Button
}
