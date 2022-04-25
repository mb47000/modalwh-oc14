import { ModalWh } from './lib'
import { useState } from 'react'

const App = () => {
  const modalStyle = {
    main: {
      background: 'red',
    },
    container: `
      border-radius: 0;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: blue;`,
    content: `
      background: green;
      padding: 10px;`,
    closeButton: `
      opacity: 0.7;
      &:after, &:before {
        background-color: white;
      }`,
  }
  const [modalState, setModalState] = useState(false)
  return (
    <>
      <button onClick={() => setModalState(true)}>Open Modal</button>
      <ModalWh
        modalState={modalState}
        setModalState={setModalState}
        modalStyle={modalStyle}
      >
        Content of the modal
      </ModalWh>
    </>
  )
}

export default App
