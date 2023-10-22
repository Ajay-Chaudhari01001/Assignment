import Navbar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Profile from "./components/profile/Profile";
import ProfileCards from "./components/profileCards/ProfileCards";
import TabSection from "./components/tabsection/TabSection";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
        <SideBar />
      <div className="content-wrapper">
        <Navbar />
        <Profile />
        <ProfileCards />
        <TabSection />
      </div>
    </div>
  );
};

export default App;
