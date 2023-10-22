import "./style.scss";
import bar from "../../assets/Bar Chart.png";
import bargraph from "../../assets/asset 36.svg";

const Audience = () => {
  return (
    <div className="audience-container">
      <div className="card-box">
        <div className="auidence-card">
          <p className="title">INFLUENCER INTEREST</p>
          <div className="list">
            <p>Friends, Family & Relationship</p>
            <p>Friends, Family & Relationship</p>
            <p>Friends, Family & Relationship</p>
            <p>Friends, Family & Relationship</p>
          </div>
        </div>

        <div className="auidence-card">
          <p className="title">REACHABILITY</p>
          <div className="bar-box">
            <img src={bar} alt="bar_graph" />
          </div>
        </div>

        <div className="auidence-card card3">
          <div className="title-box"></div>
          <div className="image">
            <img src={bargraph} alt="bar_graph" />
          </div>
          <div className="Unkown-item">
            <p>Unkown</p>
            <span className="unkown">29%</span>
          </div>
          <div className="male-item">
            <p>Male</p>
            <span className="male">38%</span>
          </div>
          <div className="female-item">
            <p>Female</p>
            <span className="female">33%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;
