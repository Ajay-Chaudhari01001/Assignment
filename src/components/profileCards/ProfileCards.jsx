import "./style.scss";
import twitter from "../../assets/asset 16.svg";
import facebook from "../../assets/asset 17.svg";
import insta from "../../assets/asset 18.svg";
import warning_icon from "../../assets/asset 34.svg";
import bar_graph from "../../assets/asset 35.svg";

const ProfileCards = () => {
  return (
    <>
    <div className="card_container">
      <div className="card">
        <div className="title">
          <p className="title">INFLUENCE</p>
          <p className="score">
            88<span>/100</span>
          </p>
        </div>
        <div className="circle">
          <div className="progress-container">
            <div className="progress-bar">
              <div className="image">
                <img src={twitter} alt="twitter_icon" />
              </div>
              <div className="progress-fill"></div>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="image">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd card */}
      <div className="card">
        <div className="title">
          <p className="title">ENGAEMENT</p>
          <p className="score score2">
            4.5% <img src={warning_icon} alt="warnign" />
            <span>vs 9% average</span>
          </p>
        </div>
        <div className="circle">
          <div className="progress-container">
            <div className="image image2">
              <div className="image-box">
                <p>2.3%</p>
                <img src={twitter} alt="twitter" />
              </div>
              <div className="image-box">
                <p>2.3%</p>
                <img src={facebook} alt="facebook" />
              </div>
              <div className="image-box">
                <p>2.3%</p>
                <img src={insta} alt="insta" />
              </div>
            </div>
            </div>
        </div>
      </div>

      {/* 3rd card */}
      <div className="card card3">
        <div className="image">
        <img src={bar_graph} alt="bar_graph" />

        </div>
        <div className="facebook item">
          <p>Facebook</p>
          <span className="followers">3k</span>
        </div>
        <div className="twitter item">
          <p>Twitter</p>
          <span className="followers">7.8k</span>
        </div>
        <div className="instagram item">
          <p>Instagram</p>
          <span className="followers">9.3k</span>
        </div>
      </div>
    </div>
    <div className="social-icons">
      <div className="facebook icon">
        <img src={insta} alt="insta_icon" />
      </div>
      <div className="twitter icon">
        <img src={twitter} alt="insta_icon" />
      </div>
      <div className="facebook icon">
        <img src={facebook} alt="insta_icon" />
      </div>
    </div>
    </>
  );
};

export default ProfileCards;
