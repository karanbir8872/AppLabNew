import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .real {
    font-size: 4rem;
    line-height: 1.3;
  }
  .lorem {
    font-size: 25px;
    font-family: poppins, sans-serif;
    line-height: 1.5;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .dbcolor {
    background: #0181f5;
    font-size: 30px;
    border: none;
  }
`;

const MobilePartOne = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <p className="real">Features that give you real feel</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida Risus com odo viverra maecenas.
          </p>
          <button className="button is-large has-text-white dbcolor">
            Download Now
          </button>
        </div>
        <div className="column has-text-centered is-half">
          <img src="/images/draw.png" alt="site logo" />
        </div>
      </div>
    </div>
  </Section>
);
export default MobilePartOne;
