import React, { useState, createContext } from 'react'
import ModalComp from './Modal'

const ModalContext = createContext()

function ModalProvider({ children }) {

    const [modal, setModal] = useState(false)
    const [modalContent, setModalContent] = useState("Modal content.")

    const handleModal = (content = false) => {
        setModal(!modal)
        if (content) {
            setModalContent(content)
        }
    }

    return (
        <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
            {children}
            <ModalComp />
        </ModalContext.Provider>
    )
}

export { ModalProvider, ModalContext }