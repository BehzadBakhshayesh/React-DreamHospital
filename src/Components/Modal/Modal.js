import React,{useState} from 'react'
import './Modal.scss'

const Modal = ({searchResult}) => {

    const [modal, setModal] =useState(true)

    return (
        <>
            <div className={`${modal ? 'trueModal' : 'falseModal'}`} onClick={()=>setModal(modal=>!modal)}>
            {searchResult[0].UserFullName}
            </div>
        </>
    )
}

export default Modal
