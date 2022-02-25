import React from "react";
import TrackList from "./TrackList";

const Modal = ({ showModal, setShowModal, filtered, getId }) => {
  return (
    <>
      {showModal ? (
        <div className="modal">
          {" "}
          {filtered.length > 0 ? (
            <TrackList tracks={filtered} getId={getId} />
          ) : (
            ""
          )}
          <div className="closeButton">
            <button
              className="closeModal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              <img
              alt="remove button"
              className="icon"
              src="images/remove.png"
            />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
