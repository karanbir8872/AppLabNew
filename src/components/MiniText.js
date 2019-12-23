import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;
const MiniText = props => (
  <Section className="section">
    <div className="container">
      <div>
        <p className="pass">{props.text}</p>
        <p className="pass">{props.title}</p>
        <p className="pass">{props.subtitle}</p>
      </div>
    </div>
  </Section>
);
export default MiniText;
