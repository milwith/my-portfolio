import React from "react";
import clock from "../img/clock.png";
import group from "../img/group.png";
import light from "../img/light.png";
import settings from "../img/settings.png";
import home2 from "../img/home2.jpg";

const QualificationSection = () => {
    return (
        <div className="qualifications">
            <div className="description">
                <h2>My <span>Qualifications</span></h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                           <img src={clock} alt="time" />
                           <h3>Efficient</h3>
                        </div>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                    </div>
                    <div className="card">
                        <div className="icon">
                           <img src={group} alt="grp work" />
                           <h3>Team work</h3>
                        </div>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                    </div>
                    <div className="card">
                        <div className="icon">
                           <img src={light} alt="bright"/>
                           <h3>Think</h3>
                        </div>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                    </div>
                    <div className="card">
                        <div className="icon">
                           <img src={settings} alt="tech"/>
                           <h3>Technically</h3>
                        </div>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                    </div>

                </div>
            </div>
            <div className="image">
                <img src={home2} alt="milan withanage"  />
            </div>
        </div>
    )
}

export default QualificationSection;
