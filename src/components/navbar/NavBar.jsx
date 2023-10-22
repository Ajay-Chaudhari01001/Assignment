import { useState } from "react";
import "./style.scss"; // Import your SCSS file

// Import your icons
import notify from "../../assets/asset 0.svg";
import email_icon from "../../assets/asset 26.png";
import profile_icon from "../../assets/asset 1.svg";
import setting_icon from "../../assets/asset 27.svg";
import menu_icon from "../../assets/asset 28.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Toggle the "open" state when the menu icon is clicked
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar">
      <div className="menu-items">
        {/* Display the menu icon for md and smaller screens */}
        {/* Display other icons for larger screens */}
        <div className="menu">
          <img src={email_icon} alt="email_icon" />
          <img src={notify} alt="notify_icon" />
          <img src={setting_icon} alt="setting_icon" />
          <img src={profile_icon} alt="profile_icon" />
        </div>
        <div
          className={`menu_icon menu ${open ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <img src={menu_icon} alt="menu_icon" />
        </div>
      </div>

      {/* Menu card that appears on medium (md) screens when the menu icon is clicked */}
      {open && (
        <div className="menu-card">
          <div className="menu-item">
            <img src={email_icon} alt="email_icon" /> <span>Email</span>
          </div>
          <div className="menu-item">
            <img src={notify} alt="notify_icon" /> <span>Notification</span>
          </div>
          <div className="menu-item">
            <img src={setting_icon} alt="setting_icon" /> <span>Setting</span>
          </div>
          <div className="menu-item">
            <img src={profile_icon} alt="profile_icon" />
            <span>Account</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
