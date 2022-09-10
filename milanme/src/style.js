import styled from "styled-components";

export const About = styled.div`
   min-height: 90vh;
   display: flex;
   padding: 5rem 10rem;
   color: white;
`;
export const Description =styled.div`
    flex: 1;
    padding-right: 5rem;
 h2{
  font-weight: lighter;
 }   
`;
export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
      width:350px;
      object-fit: cover;
      margin-left: 5rem;
      border-radius: 50%;

    }
`;
export const Hide = styled.div`
   overflow: hidden;
`;
