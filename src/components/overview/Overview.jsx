import "./style.scss";
import bmw from "../../assets/asset 21.svg";
import netflix from "../../assets/asset 22.svg";
import amex from "../../assets/asset 23.svg";
import playstation from "../../assets/asset 24.svg";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="first-row">
        <div className="first-row-card">
          <p className="title">INSIGHTS</p>
          <p className="percent">4.5%</p>
          <div className="score-box">
            <p className="score">Avg Views: 3.3k</p>
            <p className="score">Avg Comments: 9k</p>
            <p className="score">Avg Likes: 213</p>
            <p className="score">Avg Views: 3.3k</p>
            <p className="score">Avg Views: 3.3k</p>
          </div>
        </div>
        <div className="first-row-card">
          <p className="follower-title title">FOLLOWERS CREDIBILITY</p>
          <p className="follower-percent">83.5%</p>
        </div>
        <div className="first-row-card">
          <p className="title">BRAND AFFINITY</p>
          <div className="logo-box">
            <div className="logo">
              <img src={bmw} alt="bmw" />
              <p>BMW</p>
            </div>
            <div className="logo">
              <img src={netflix} alt="netflix" />
              <p>Netflix</p>
            </div>
            <div className="logo">
              <img src={amex} alt="amex" />
              <p>Amex</p>
            </div>
            <div className="logo">
              <img src={playstation} alt="playstation" />
              <p>Playstation</p>
            </div>
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="card">
          <p className="title">INFLUENCER INTEREST</p>
          <div className="list">
            <p>Friends, Family & Relationship</p>
            <p>Friends, Family & Relationship</p>
            <p>Friends, Family & Relationship</p>
            <p>Friends, Family & Relationship</p>
          </div>
        </div>
        <div className="card">
          <p className="title">POST TOPICS</p>
          <div className="list">
            <p>raghudixit</p>
            <p>bangalore</p>
            <p>gokamabeach</p>
            <p>magictrics</p>
            <p>legomovie</p>
          </div>
        </div>
        <div className="card">
          <p className="title">POST TOPICS</p>
          <div className="list">
            <p>raghudixit</p>
            <p>bangalore</p>
            <p>gokamabeach</p>
            <p>magictrics</p>
            <p>legomovie</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
