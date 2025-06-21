import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const [formData, SetFormData] = useState({
    cardImage: "",
    title: "",
    description: "",
  });
  const [dynamicCard, SetDynamicCard] = useState([]);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cardImage") {
      const file = files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        SetFormData((prev) => ({ ...prev, cardImage: imageUrl }));
      }
    } else {
      SetFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleAddCard = () => {
    // Only add if title and description are filled
    if (formData.title && formData.description) {
      SetDynamicCard([...dynamicCard, formData]);
      SetFormData({ cardImage: "", title: "", description: "" }); // clear form
    }
  };
  return (
    <>
      <div className="container w-50">
        <h3 class="display-6">Add Your Products Below</h3>
        <input
          type="file"
          name="cardImage"
          onChange={handleChange}
          placeholder="Image Source"
          className="form-control mb-2"
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product Title Here"
          className="form-control mb-2"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Product 
           Description"
          className="form-control mb-2"
        />
        <button className="btn btn-primary" onClick={handleAddCard}>
          Add Product
        </button>
      </div>
      <div
        className="container w-50 border border-dark my-2"
        style={{ height: "50vh", overflowY: "auto" }}
      >
        <div className="d-flex flex-wrap gap-2">
          {dynamicCard.map((card, index) => (
            <div className="card" style={{ width: "13rem" }} key={index}>
              <img
                src={card.cardImage}
                className="card-img-top"
                alt={card.title}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
