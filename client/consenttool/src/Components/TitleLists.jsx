import React, { useState, useEffect } from "react";
import axios from "axios";

const TitleLists = () => {
  const [titles, setTitles] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/titles");
      setTitles(response.data);
    } catch (error) {
      console.error("Error fetching titles:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/titles", {
        title: newTitle,
      });
      console.log("New Title added:", response.data);
      setNewTitle(""); // Clear input field
      fetchData(); // Refresh data after adding new title
    } catch (error) {
      console.error("Error adding title:", error);
    }
  };

  return (
    <div className="container">
      <h1>Title List</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="newTitle" className="form-label">
            Add New Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="newTitle"
            value={newTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Title
        </button>
      </form>
      <div className="row">
        {titles.map((title) => (
          <div className="col-md-4" key={title._id}>
            <h3>{title.title}</h3>
            <ul>
              {title.lists.map((list) => (
                <li key={list._id}>
                  <h4>{list.name}</h4>
                  <ul>
                    {list.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleLists;
