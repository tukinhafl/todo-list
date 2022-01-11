import styled from 'styled-components'

export const StyledContainer = styled.div<{modal: boolean}>`
  height: 100vh;
  width: 100%;
  background: gray;
  display: ${props => props.modal ? 'flex' : 'none'};
  opacity: 0.8;

  div {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 125px;
    width: 300px;
    background: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    gap: 10px;

    span {
      position: absolute;
      top: 5px;
      right: 5px;
      color: black;
      font-weight: bold;
      font-size: 22px;
    }

    input {
      border: none;
      border-radius: 5px;
      padding: 5px;
      height: 30px;
    }

    button {
      border-radius: 5px;
      padding: 5px;
      height: 30px;
    }
  }
`