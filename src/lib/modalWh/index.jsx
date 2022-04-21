import {
  StyledModal,
  StyledModalContainer,
  StyledModalContent,
  StyledCloseButton,
} from './style'
import FocusTrap from 'focus-trap-react'
import React, { useEffect, useRef } from 'react'

const useOutsideClose = (ref, setModalState) => {
  useEffect(() => {
    /**
     * Close Modal if clicked on outside of the container
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModalState(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, setModalState])
}

const ModalWh = ({
  children,
  modalState,
  setModalState,
  modalStyle,
  customCloseButton,
}) => {
  const containerRef = useRef(null)
  useOutsideClose(containerRef, setModalState)

  return (
    <>
      {modalState && (
        <StyledModal>
          <FocusTrap>
            <StyledModalContainer ref={containerRef}>
              {customCloseButton || (
                <StyledCloseButton
                  onClick={() => setModalState(false)}
                  tabIndex="0"
                />
              )}
              <StyledModalContent>{children}</StyledModalContent>
            </StyledModalContainer>
          </FocusTrap>
        </StyledModal>
      )}
    </>
  )
}

export default ModalWh
