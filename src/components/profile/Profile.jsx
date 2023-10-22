import profile_photo from "../../assets/asset 6.png";
import insta_icon from "../../assets/asset 7.png";
import twitter_icon from "../../assets/asset 9.png";
import facebook_icon from "../../assets/asset 10.png";
import location_icon from "../../assets/asset 31.svg";
import flag_icon from "../../assets/asset 11.png";
import heart_icon from "../../assets/asset 12.svg";
import data_bio_icon from "../../assets/asset 13.svg";
import tag from "../../assets/asset 32.svg";
import verfy_tick from "../../assets/Vector.png";
import medal from "../../assets/asset 14.svg";
import info_icon from "../../assets/asset 15.svg";

import "./style.scss";

const Profile = () => {
  return (
    <div className="profile-content">
      <img src={profile_photo} alt="profile_photo" />
      <img src={verfy_tick} alt="tick" className="tick" />
      <div className="info">
        <div className="name_info">
          <h1>Zoe Sennett</h1>
          <div className="address-data">
            <div className="social_icons">
              <img src={insta_icon} alt="insta_icon" />
              <img src={twitter_icon} alt="twitter_icon" />
              <img src={facebook_icon} alt="facebook_icon" />
            </div>
            <div className="address">
              <div className="location">
                <img src={location_icon} alt="location_icon" />
                <p>Chicago, USA</p>
              </div>
              <img src={flag_icon} alt="flag_icon" />
            </div>
          </div>
        </div>
        <div className="data">
          <p className="data_name">
            <span className="heart_icon">
              <img src={heart_icon} alt="heart_icon" />
            </span>
            Fashion, Cosmetics, Design
          </p>
          <p className="data_name">
            <span>
              <img src={data_bio_icon} alt="data_bio_icon" />
            </span>
            My name is Helena and I'm an influencer from Sweden that loves to
            take beautiful pictures that inspire. I'm purposeful, committed and
            love to being creative.
          </p>
          <div className="button">
            <div className="buttons">
              <div className="add btn">+ Add To Campaign</div>
              <div className="tag btn">
                <img
                  src={tag}
                  style={{ width: "25px", height: "25px" }}
                  alt="tag"
                />
              </div>
            </div>
            <div className="grade">
              <img src={medal} alt="medal_icon" />
              <div className="total">
                <p className="score">70/100</p>
                <p>Excellent</p>
                <p className="quality">
                  Quality Score{" "}
                  <span>
                    <img src={info_icon} alt="info_icon" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
