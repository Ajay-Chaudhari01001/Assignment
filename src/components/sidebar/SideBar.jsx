// SideBar.js

import "./style.scss";
import home_icon from "../../assets/asset 29.svg";
import sound_icon from "../../assets/asset 2.svg";
import file_icon from "../../assets/asset 3.svg";
import user_icon from "../../assets/asset 4.svg";
import search_icon from "../../assets/asset 30.svg";
import ham_icon from "../../assets/asset 5.svg";
import menu_icon from "../../assets/asset 25.svg";
import { useState } from "react";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="menu-icon" onClick={toggleSidebar}>
        <img src={menu_icon} alt="menu_icon" />
      </div>
      <div className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
        <div className="logo">
          <img src={home_icon} alt="home_icon" />
          <p>AIFLUENCE</p>
        </div>
        <div className="side-menu">
          <div className="menu-item">
            <img src={sound_icon} alt="sound_icon" />
            <p>Accounts</p>
          </div>
          <div className="menu-item">
            <img src={file_icon} alt="file_icon" />
            <p>Accounts</p>
          </div>
          <div className="menu-item">
            <img src={user_icon} alt="user_icon" />
            <p>Influencers</p>
          </div>
          <div className="menu-item">
            <img src={search_icon} alt="search_icon" />
            <p>Discovery</p>
          </div>
          <div className="menu-item">
            <img src={ham_icon} alt="ham_icon" onClick={toggleSidebar} />
            <p>Lists</p>
          </div>
        </div>
        <div className="terms">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
