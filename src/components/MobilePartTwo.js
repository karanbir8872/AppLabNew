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
    margin-top: 3rem;
  }
  .mgg {
    margin-right: 15px;
  }
  .dolor {
    font-size: 22px;
    line-height: 2;
    color: #727272;
  }
  .second {
    margin-top: 6rem;
  }
  .one {
    margin-top: 5rem;
  }
`;

const MobilePartTwo = () => (
  <Section className="section">
    <div className="container">
      <div className="columns one">
        <div className="column has-text-centered is-half">
          <img src="/images/phone2.png" alt="site logo" />
        </div>
        <div className="column is-half second">
          <p className="real">Easy setup and management</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt
          </p>
          <ul>
            <li>
              <p className="dolor">
                <i className="fas fa-map-marker-alt has-text-black mgg" />
                Apartments frequently or motionless.
              </p>
              <p className="dolor">
                <i className="fas fa-map-marker-alt has-text-black mgg" /> Duis
                aute irure dolor in reprehenderit in voluptate
              </p>
              <p className="dolor">
                <i className="fas fa-map-marker-alt has-text-black mgg" />
                Voluptatem quia voluptas sit aspernatur.
              </p>
            </li>
          </ul>
          <button className="button is-large has-text-white dbcolor">
            Download Now
          </button>
        </div>
      </div>
    </div>
  </Section>
);
export default MobilePartTwo;
