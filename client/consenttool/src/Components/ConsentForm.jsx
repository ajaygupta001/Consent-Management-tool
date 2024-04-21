import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ConsentModal from "./ConsentModal";

const ConsentForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost:3000/api/title", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Consent added successfully!");
      } else {
        console.error("Failed to add consent");
      }
    } catch (error) {
      console.error("Error adding consent:", error);
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 h-60 bg-white p-3 bg-primary-subtle">
        <Button variant="danger" onClick={handleShowModal}>
          Add Consent
        </Button>
        <ConsentModal
          show={showModal}
          handleClose={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ConsentForm;
