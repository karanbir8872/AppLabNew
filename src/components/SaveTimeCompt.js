import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .img {
    height: 10rem;
  }
  .part {
    font-size: 35px;
    line-height: 1.2;
    margin-top: 2rem;
    font-family: poppins, sans-seri;
  }
`;
const SaveTimeCompt = props => (
  <Section className="section">
    <div className="container">
      <div>
        <img className="img" src={props.img} />
        <p className="part">{props.text}</p>
      </div>
    </div>
  </Section>
);
export default SaveTimeCompt;
