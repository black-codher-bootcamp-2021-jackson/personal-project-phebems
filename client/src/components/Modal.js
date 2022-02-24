import React from "react";

const Modal = ({ showModal, setShowModal }) => {
  return <>{showModal ? <div className="modal">Modal
  <button onClick={()=>setShowModal(prev => !prev)}>x</button>
  </div> : null}</>;
};

export default Modal;
