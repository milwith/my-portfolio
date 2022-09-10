import React from 'react';
import home1 from '../img/home1.jpeg';
import { About, Description, Image ,Hide} from '../style';

const AboutSection = () => {
    return (
        <About>
            <Description> 
                <div className="title">
                  <Hide>
                    <h2>i am</h2>
                  </Hide>
                  <Hide>
                    <h2>a <span>programmer</span> with</h2>
                  </Hide>
                  <Hide>
                    <h2>BEST courage.</h2>
                  </Hide>
                </div>
                <p>
                A programmer is an individual that writes/creates computer software or applications by giving the computer specific programming instructions
                </p>
                <button>Contact Me</button>
            </Description>
            <Image>
                <img src={home1} alt="milan withanage" />
            </Image>
        </About>

    )
}


export default AboutSection;
