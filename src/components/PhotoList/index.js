import React, { useState } from "react";
import Modal from "../Modal";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "Music Weekly",
      category: "projects",
      description: "https://musicweekly.herokuapp.com/",
    },
    {
      name: "Coffee Break Fun",
      category: "projects",
      description: "https://tarajevans.github.io/coffee-break/",
    },
    {
      name: "Work Day Scheduler",
      category: "projects",
      description: "https://priyaaaryan.github.io/Work-Day-Scheduler/",
    },
    {
      name: "Horiseo Website",
      category: "projects",
      description: "https://priyaaaryan.github.io/Code-Refactor/",
    },
    {
      name: "Run Buddy",
      category: "projects",
      description: "https://priyaaaryan.github.io/run-buddy/",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
