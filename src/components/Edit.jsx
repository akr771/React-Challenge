import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Edit = ({ edit,products }) => {
    const navigate = useNavigate();

  const { id } = useParams();
  const product = products.find((m) => m.id == id);

  const [formData, setFormData] = useState({
    title: product ? product.title : '',
    price: product ? product.price : '',
    description: product ? product.description : '',
    id:product.id
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
const handleSubmit=(e)=>{
    e.preventDefault();
edit(formData,id)
navigate('/products');
}
  return (
    <div>
      <h2>{formData.title}!</h2>
      <form onSubmit={handleSubmit}>
        <p>Name: </p>
        <input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange} 
        />
        <p>Price: </p>
        <input 
          type="text" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} 
        />
        <p>Description: </p>
        <textarea 
          name="description"
          value={formData.description} 
          onChange={handleChange} 
        />
        <br></br>
        {/* <hr></hr> */}
        <button type='submit'>submit</button>
        <Link to="/products">Back</Link>
        <Link to={`/show/${id}`}>Show</Link>
      </form>
    </div>
  );
};

export default Edit;
