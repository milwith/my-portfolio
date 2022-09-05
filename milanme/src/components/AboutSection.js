import React from 'react';
import home1 from '../img/home1.jpeg';
import styled from 'styled-components';


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

const About = styled.div`
   min-height: 90vh;
   display: flex;
   padding: 5rem 10rem;
   color: white;
`;
const Description =styled.div`
    flex: 1;
    padding-right: 5rem;
 h2{
  font-weight: lighter;
 }   
`;
const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
      width:350px;
      object-fit: cover;
    }
`;
const Hide = styled.div`
   overflow: hidden;
`
export default AboutSection;
