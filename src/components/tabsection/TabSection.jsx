import { useState } from "react";
import "./style.scss";
import Overview from "../overview/Overview";
import Audience from "../audience/Audience";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tab-section">
      <div className="tab-buttons">
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          OVERVIEW
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          AUDIENCE
        </button>
        <button
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          CONTENT
        </button>
        <button
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleTabClick(4)}
        >
          MANAGE
        </button>
      </div>
      <div className="tab-content">
        <div className={activeTab === 1 ? "tab active" : "tab"}>
          <Overview />
          <h2>Audience</h2>
          <Audience />
        </div>
        <div className={activeTab === 2 ? "tab active" : "tab"}>
          <Audience />
        </div>
        <div className={activeTab === 3 ? "tab active" : "tab"}>
          <h2>Content</h2>
        </div>
        <div className={activeTab === 4 ? "tab active" : "tab"}>
          Content for Tab 4
        </div>
      </div>
    </div>
  );
};

export default TabSection;
