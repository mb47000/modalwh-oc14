import { ModalWh } from './lib'
import { useState } from 'react'

const App = () => {
  const [modalState, setModalState] = useState(false)
  return (
    <>
      <button onClick={() => setModalState(true)}>Open Modal</button>
      <ModalWh modalState={modalState} setModalState={setModalState}>
        Content of the modal
      </ModalWh>
    </>
  )
}

export default App
