import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {

  const onClickBox = (e) => {
    console.log(e);
    console.log(children);
  }

  return ReactDOM.createPortal(
    <div 
      className='ModalBackground'
      onClick={onClickBox}
      >
      {children}
    </div>,
    document.getElementById('modal'),
  );
}

export { Modal };