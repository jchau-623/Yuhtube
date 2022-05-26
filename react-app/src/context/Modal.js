import { createContext, useRef, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";

import './Modal.css';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
};

export function Modal({ onClose, children, option }) {
  return (
    <div id='modal'>
      <div id='modal-background' className={`${option==='layer' ? 'layer' : ''}`} onClick={onClose}/>
      <div id='modal-content'>{children}</div>
    </div>
  )
};
