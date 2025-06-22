import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Cards from './components/cards/Cards';
import Graphs from './components/graph/Graphs';
import Products from './components/products/Products';
import Customers from './components/customers/Customers';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Sidebar/>

<Routes>
    <Route path="/" element={
      <>
      <Navbar/>
        <Cards />
        <Graphs />
      </>
    } />
    <Route path="/products" element={<Products />}/>
    <Route path="/customers" element={<Customers />}/>
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
</BrowserRouter>
</>
  )
}

export default App
