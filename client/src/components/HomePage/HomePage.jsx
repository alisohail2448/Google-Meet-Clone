import React from "react";
import shortid from "shortid"
import { useNavigate } from "react-router-dom";
import Header from "../UI/Header/Header";
import "./HomePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg",
  },
  {
    url: "https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg",
  },
  {
    url: "https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg",
  },
];

const HomePage = () => {
// const history = useHistory();
let navigate = useNavigate();
  const startCall = () =>{
    const uid = shortid.generate();
      navigate(`/${uid}#init`)
  }

  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Premium video meetings. Now free for everyone.</h2>
            <p>
              We re-engineered the service we built for secure business
              meetings, Google Meet, to make it free and available for all.
            </p>

            <div className="action-btn">
              <button className="btn green" onClick={startCall} >
                <FontAwesomeIcon className="icon-block" icon={faVideo} /> New
                Meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input type="text"  placeholder="Enter a code or link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a href="#">Learn More</a> about Google
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <SimpleImageSlider
              width={350}
              height={350}
              images={images}
              showBullets={true}
              showNavs={true}
              bgColor={"#fff"}
              navSize={30}
              navMargin={0}
              autoPlay={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
