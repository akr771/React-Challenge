import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Showw = ({ products }) => {
    const { id } = useParams();
    //console.log('yes',products[0].id )
    const product = products.find((m) => m.id == id);
  
    if (!product) {
      return <div>Member not found</div>;
    }
  
    return (
      <div>
        <h2>{product.title}!</h2>
        <p>Name: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <Link to="/products">Back </Link>
        <Link to={`/edit/${product.id}`}>Edit</Link>
      </div>
    );
  };
  
  export default Showw  