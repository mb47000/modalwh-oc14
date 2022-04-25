import {
  StyledModal,
  StyledModalContainer,
  StyledModalContent,
  StyledCloseButton,
} from './style'
import FocusTrap from 'focus-trap-react'
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

/**
 * Close Modal if clicked on outside of the container
 * @param {React.Component} ref The container of the modal
 * @param {function} setModalState The function to update the modal state.
 */
const useOutsideClose = (ref, setModalState) => {
  useEffect(() => {
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

/**
 * A simple React Modal component, easy to customize
 * @component
 * @param {any} children The content of the modal, put anything you want
 * @param {boolean} modalState The state of the modal, true for show, false for hide.
 * @param {function} setModalState The function to update the modal state.
 * @param {Object} modalStyle Custom style css for the different part of the modal, object shape: {main: {}, container: {}, content: {}, customCloseButton: {}}.
 * @param {HtmlElement|ReactComponent} customCloseButton If you want to pass a personalized React component for close button.
 * @returns {React.Component} React Modal component
 */
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
        <StyledModal customStyle={modalStyle?.main}>
          <FocusTrap>
            <StyledModalContainer
              ref={containerRef}
              customStyle={modalStyle?.container}
            >
              {customCloseButton || (
                <StyledCloseButton
                  onClick={() => setModalState(false)}
                  tabIndex="0"
                  customStyle={modalStyle?.closeButton}
                />
              )}
              <StyledModalContent customStyle={modalStyle?.content}>
                {children}
              </StyledModalContent>
            </StyledModalContainer>
          </FocusTrap>
        </StyledModal>
      )}
    </>
  )
}

ModalWh.propTypes = {
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
  customCloseButton: PropTypes.element,
  modalStyle: PropTypes.shape({
    main: PropTypes.string,
    container: PropTypes.string,
    content: PropTypes.string,
    closeButton: PropTypes.string,
  }),
  children: PropTypes.any,
}

export default ModalWh
