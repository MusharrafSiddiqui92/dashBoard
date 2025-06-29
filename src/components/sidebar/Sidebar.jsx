import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineInventory2 } from "react-icons/md";
import { GoReport } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { WiDayThunderstorm } from "react-icons/wi";

const Sidebar = () => {
  const navigate = useNavigate();
  // function handleClickProducts() {
  //   navigate("/Sidebar/Products");
  // }
  // function handleClickCustomers() {
  //   navigate("/Sidebar/Customers");
  // }
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas"
      >
        Open Sidebar
      </button>
      <div
        className="offcanvas offcanvas-start show custom-offcanvas-width"
        tabIndex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      // style={{width:"30%"}}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">
            <FaShoppingCart />
            <span className="ps-3">Store</span>{" "}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body fs-5">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <MdDashboard />
                <span className="ps-3">Dashboard</span>
              </NavLink>
              {/* <a className="nav-link" href="#">
              </a> */}
            </li>
            <li className="nav-item mt-3">
              {/* <a class="nav-link" href="#"> */}
              <NavLink to="/Products" className="nav-link">
                <MdOutlineProductionQuantityLimits />
                <span className="ps-3">Products</span>
              </NavLink>
            </li>
            <li className="nav-item mt-3">
              <a className="nav-link" href="#">
                <TbCategory2 />
                <span className="ps-3">Category</span>{" "}
              </a>
            </li>
            <li className="nav-item mt-3">
              <NavLink to="/Customers" className="nav-link">
                {/* <a className="nav-link" href="#"><HiUsers /> */}
                <HiUsers />
                <span className="ps-3">Customers</span>
              </NavLink>
            </li>
            <li className="nav-item mt-3">
              <a className="nav-link" href="#">
                <MdOutlineInventory2 />
                <span className="ps-3">Inventory</span>{" "}
              </a>
            </li>
            <li className="nav-item mt-3">
              <a className="nav-link" href="#">
                <GoReport />
                <span className="ps-3">Report</span>{" "}
              </a>
            </li>
            <li className="nav-item mt-3">
              <a className="nav-link" href="#">
                <IoSettingsOutline />
                <span className="ps-3">Settings</span>{" "}
              </a>
            </li>
          </ul>
        </div>
        <outLet/>
      </div>
    </>
  );
};

export default Sidebar;
