import styled from 'styled-components'

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.background || 'rgba(0, 0, 0, 0.75)'};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledModalContainer = styled.div`
  background: ${(props) => props.background || 'rgb(255, 255, 255)'};
  border-radius: ${(props) => props.borderRadius || '5px'};
  width: ${(props) => props.width || '90%'};
  max-width: ${(props) => props.maxWidth || '400px'};
  padding: ${(props) => props.padding || '38px'};
  position: relative;
`

export const StyledModalContent = styled.div`
  text-align: ${(props) => props.textAlign || 'center'};
  background: ${(props) => props.background || 'inherit'};
`
export const StyledCloseButton = styled.a`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 32px;
  height: 32px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &:before,
  &:after {
    position: absolute;
    content: ' ';
    height: 33px;
    width: 2px;
    left: 14px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`
