import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    
    <nav className="navbar">
  <div className="container w-25 z-3 position-relative">
    <a className="navbar-brand" href="#">
      <IoSearchOutline /></a>
  </div>
  <div className="icons pe-5 d-flex gap-2">
<IoIosNotifications />
<MdEmail />
<FaUser />
  </div>
</nav>
</>
  )
}

export default Navbar
