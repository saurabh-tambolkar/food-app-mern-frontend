import React, { Children } from 'react'
import {createPortal} from 'react-dom'

const MODAL_STYLES ={
    position:'fixed',
    top:"50%",
    left:"50%",
    backgroundColor:"#424242",
    transform: "translate(-50%, -50%)",
    zIndex:10,
    minHeight:"80%",
    width:"90%",
}

const OVERLAY_STYLES = {
    position:'fixed',
    top:"0",
    left:"0",
    right:"0",
    bottom:"0",
    backgroundColor:"rgba(0,0,0,0.8)",
    zIndex:10,
}

const modalRoot = document.getElementById('cart-root')

export default function Modal({children,onClose}) {
  return createPortal(
        <>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
                <button className="btn btn-danger fs-4" style={{position:'fixed',marginLeft:"100",right:'0px'}}  onClick={onClose}>X</button>
                {children}
            </div>
        </>,
        modalRoot
        
    )
  
}


