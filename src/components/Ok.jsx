import React  from 'react'

import { Link } from 'react-router-dom';
function Aapp({delet,products}) {
 console.log(products)
  return(
<div>


<table className=''>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>${product.price}</td>
            <td><Link to={`/show/${product.id}`}>Show</Link> ||
            <Link to={`/edit/${product.id}`}>Edit</Link>|| 
            <button onClick={()=>{delet(product.id)}}>delete</button>  </td>
          </tr>
           ))}
         
        </tbody>
      </table>

      <Link to={'/new'}>Add  product</Link>
      
    
</div>
  )
}

export default Aapp



