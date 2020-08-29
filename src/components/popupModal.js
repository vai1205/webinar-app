import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import {FiArrowRight} from 'react-icons/fi';

const PopupModal = ({ title, img, content }) => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(()=>{
    setIsOpen(true);
  })
  const opener = () => {
    return(
      <>
        <button>
        <><div>Read More..</div><FiArrowRight/></>
        </button>
      </>
    )
  }
  return (
    <>
      {
        isOpen &&
        <Popup trigger={<div className="read-more-modal">Read More &rarr;</div>} modal>
          <div className="popup-modal">
            <a className="close-modal" onClick={() => { setIsOpen((currentState) => !currentState) }}>
              &times;
        </a>
            <div className="title">{title}</div>
            <div className="content">
              <div className="image">
                <img src={img} alt="doctor-image" />
              </div>
              <div className="details">
                {content}
              </div>
            </div>
          </div>
        </Popup>
      }
    </>
  );
};
export default PopupModal;