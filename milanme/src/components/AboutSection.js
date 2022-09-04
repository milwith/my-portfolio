import React from 'react';
import home1 from '../img/home1.jpeg';


const AboutSection = () => {
    return (
        <div>
            <div className="discription">
                <div className="title">
                  <div className="hide">
                    <h2>i am</h2>
                  </div>
                  <div className="hide">
                    <h2>a <span>programmer</span> with</h2>
                  </div>
                  <div className="hide">
                    <h2>BEST courage.</h2>
                  </div>
                </div>
                <p>
                A programmer is an individual that writes/creates computer software or applications by giving the computer specific programming instructions
                </p>
                <button>Contact Me</button>
            </div>
            <div className="image">
                <img src={home1} alt="milan withanage" />
            </div>
        </div>

    )
}

export default AboutSection;
