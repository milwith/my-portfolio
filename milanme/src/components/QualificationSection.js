import React from "react";
import clock from "../img/clock.png";
import group from "../img/group.png";
import light from "../img/light.png";
import settings from "../img/settings.png";
import home2 from "../img/home2.jpg";
import { About, Description,Image } from "../style";
import styled from "styled-components";

const QualificationSection = () => {
    return (
        <Services>
            <Description>
                <h2>My <span>Qualifications</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                           <img src={clock} alt="time" />
                           <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                           <img src={group} alt="grp work" />
                           <h3>Team work</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                           <img src={light} alt="bright"/>
                           <h3>Think</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                           <img src={settings} alt="tech"/>
                           <h3>Technically</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="milan withanage"  />
            </Image>
        </Services>
    )
}
const Services = styled(About)`
h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;
const Cards =styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
      flex-basis: 19rem;
      .icon{
        display: flex;
        align-items: center;
      }
      h3{
        margin: 1rem;
        background: white;
        color: black;
        padding: 1rem;
      }
      
`;

export default QualificationSection;
