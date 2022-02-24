import React from "react";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="modal">
          <div className="closeButton">
            <button
              className="closeModal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              x
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
