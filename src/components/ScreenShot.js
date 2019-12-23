import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;
const ScreenShot = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-two-fifths has-text-centered ">
          <img src="/images/man_walk.png" alt="trcbvh" />
        </div>
        <div className="column is-two-fifths has-text-centered ">
          <img src="/images/mobile_screen.png" alt="trcbvh" />
        </div>
      </div>
    </div>
  </Section>
);
export default ScreenShot;
