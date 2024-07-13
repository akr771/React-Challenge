import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewProduct = ({add}) => {

  const [formData, setFormData] = useState({
    title: '',
    price:  '',
    description: ''
 
  });

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handeleSubmit=(e)=>{
    e.preventDefault();
    add(formData)
    setFormData({
        title: '',
        price:  '',
        description: ''
      });

  }
  return (
    <div>
      <h2>{formData.title}!</h2>
      <form onSubmit={handeleSubmit}>
        <p>Name: </p>
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
          required
        />
        <p>Price: </p>
        <input 
          type="text" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} 
          required
        />
        <p>Description: </p>
        <textarea 
          name="description"
          value={formData.description} 
          onChange={handleChange} 
          required
        />
        <br></br>
        
        <button type='submit'>submit</button>
        <Link to="/products">Back</Link>

      </form>
    </div>
  );
};

export default NewProduct;
