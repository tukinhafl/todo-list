import styled from 'styled-components'

export const StyledList = styled.ul`
  height: 400px;
  margin-top: 80px;

  h1 {
    font-size: 20px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    width: 100%;
  }

  div {

    i {
      font-size: 20px;
      padding: 5px;
    }
  }
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
  left: 10px;
  top: 10px;
`