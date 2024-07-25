import React/* { useState } */from 'react';
// import CustomModal from './Modal';
import './Home.css';

function Home() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [modalContent, setModalContent] = useState('');

//   const openModal = (content) => {
//     setModalContent(content);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setModalContent('');
//   };

  return (
    <main id="home">
      <h2>Welcome to Spa Club</h2>
      <p>Experience luxury and relaxation at our state-of-the-art spa.</p>
      <div className="image-gallery">
        <img
          src="https://cdn.pixabay.com/photo/2019/09/16/17/18/spa-4481538_640.jpg"
          alt="Spa 1"
          //onClick={() => openModal(<img src="https://cdn.pixabay.com/photo/2019/09/16/17/18/spa-4481538_640.jpg" alt="Spa 1" />)}
        />
        <img
          src="https://cdn.pixabay.com/photo/2022/09/13/21/47/massage-7452918_640.jpg"
          alt="Spa 2"
          //onClick={() => openModal(<img src="https://cdn.pixabay.com/photo/2022/09/13/21/47/massage-7452918_640.jpg" alt="Spa 2" />)}
        />
        <img
          src="https://cdn.pixabay.com/photo/2023/11/14/22/54/beauty-8388808_640.jpg"
          alt="Spa 3"
          //onClick={() => openModal(<img src="https://cdn.pixabay.com/photo/2023/11/14/22/54/beauty-8388808_640.jpg" alt="Spa 3" />)}
        />
      </div>
      {/* <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        content={modalContent}
      /> */}
    </main>
  );
}

export default Home;