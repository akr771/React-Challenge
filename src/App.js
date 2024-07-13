
import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Ok from './components/Ok'
import Showw from './components/Showw';
import Edit from './components/Edit';
import NewProduct from './components/NewProduct';

function App() {
  const [products, setProducts] = useState(
    () => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  const [count,setCount]=useState(  () => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? JSON.parse(savedCount): 21;
  });

  useEffect(() => {
    if(products.length<1){
    axios.get('https://fakestoreapi.com/products')
    .then(res =>{
      localStorage.setItem('products', JSON.stringify(res.data));
      setProducts(res.data) 
      console.log(res.data)
      }
      )
    }
  
  }, []);

  const handleAdd=(form)=>{
    setCount(count+1)
   
    const add={...form,id:count}
 
     localStorage.setItem('products', JSON.stringify([...products,add]));
    localStorage.setItem('count', JSON.stringify(count));

     setProducts([...products,add])
   
     console.log(form)
  }

  const handleEdit=(form,id)=>{
    const updatedPosts = products.map(product =>
      product.id == id ?  form : product
    );
    localStorage.setItem('products', JSON.stringify(updatedPosts));

    console.log(updatedPosts)
    setProducts(updatedPosts)
  console.log(products)
  }
  const handledelet=(id)=>{
    console.log(id)
    const updatedPosts = products.filter(item => item.id !== id);
    localStorage.setItem('products', JSON.stringify(updatedPosts));

    setProducts(updatedPosts)
  }
  return (
    <Router>
   
      <Routes>
      
        <Route path="/" element={<p>hallo</p>} />
        <Route path="/products" element={<Ok delet={handledelet} products={products}/>} />
        <Route path="/new" element={<NewProduct add={handleAdd} />} />
        <Route path="/show/:id" element={<Showw products={products}/>} />

        <Route path="/edit/:id" element={<Edit edit={handleEdit} products={products}/>} />
      
       </Routes>
      
  
    </Router>
   
  );
}

export default App;
