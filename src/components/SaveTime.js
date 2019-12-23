import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .tex {
    font-size: 73px;
    line-height: 1.2;
    color: #2c2c2c;
  }
`;
const SaveTime = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <p className="has-text-centered tex">
            Save your time to using applab
          </p>
        </div>
      </div>
    </div>
  </Section>
);
export default SaveTime;
