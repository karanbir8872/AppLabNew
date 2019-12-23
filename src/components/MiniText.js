import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  border-bottom: 1px solid #e8e8e8;
  padding-top: 90px;
  padding-bottom: 60px;
  .passt {
    font-size: 24px;
    line-height: 1.3;
    color: #727272;
  }
  .tit {
    color: #2c2c2c;
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 30px;
  }
  .pass {
    color: #0181f5;
  }
`;
const MiniText = props => (
  <Section className="section">
    <div className="container">
      <div>
        <p className="pass is-size-4">{props.text}</p>
        <p className="tit">{props.title}</p>
        <p className="passt">{props.subtitle}</p>
      </div>
    </div>
  </Section>
);
export default MiniText;
