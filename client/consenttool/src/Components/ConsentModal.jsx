import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ConsentModal = ({ show, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [listName, setListName] = useState("");
  const [item, setItem] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ title, listName, item });
    setTitle("");
    setListName("");
    setItem("");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Consent</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="listName">ListName</label>
            <input
              type="text"
              placeholder="Enter ListName"
              className="form-control"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="item">Item</label>
            <input
              type="text"
              placeholder="Enter item"
              className="form-control"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <Button variant="danger" type="submit">
            Add
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ConsentModal;
