import React, { useState } from "react";
import Image from "next/image";
import CModal from "../components/modal";
import Modal from "react-modal";

const AboutHero = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(value) {
    setIsOpen(!isOpen);
  }
  return (
    <div className="md:p-20 py-20 md:min-h-screen flex flex-col items-center bg-redBg bg-cover bg-no-repeat">
      <div className="md:p-10 text-center font-bold text-white pb-5">
        <h2 className="md:text-2xl pb-5">Adipisicing quis amet et</h2>
        <h1 className="text-5xl md:text-7xl font-nmr">WHO WE ARE</h1>
      </div>
      <div
        aria-hidden="true"
        onClick={toggleModal}
        className="text-center px-5 max-w-4xl"
      >
        <Image alt="image" src="/vid.png" width="1093" height="563" />
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        ariaHideApp={false}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <CModal toggleModal={toggleModal} />
      </Modal>
    </div>
  );
};

export default AboutHero;
