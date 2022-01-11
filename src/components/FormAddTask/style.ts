import styled from 'styled-components'

export const StyledForm = styled.div`
  height: 100vh;
  width: 100%;
  padding: 15px;
  margin: 0;
  display: flex;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    align-self: flex-end;
    margin-bottom: 30px;
  }
`

export const StyledInput = styled.input`
  height: 50px;
  width: 100%;
  background: gray;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  margin-right: 10px;

  ::placeholder {
    color: white;
  }
`

export const StyledButton = styled.button`
  height: 40px;
  width: 40px;
  background: blue;
  border: none;
  border-radius: 5px;
  font-size: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledSpan = styled.span`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background: blue;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
  font-weight: bold;
  right: 10px;
  top: 10px;
`