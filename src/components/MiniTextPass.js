import React from 'react';
import styled from 'styled-components';
import MiniText from './MiniText';

const Section = styled.div`
`;

const MiniTextPass = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-one-third ">
          <MiniText
            text="01"
            title="Sign Up for free"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
          />
        </div>
        <div className="column is-one-third">
          <MiniText
            text="02"
            title="Make your profile"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
          />
        </div>
        <div className="column is-one-third">
          <MiniText
            text="03"
            title="Enjoy the app"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
          />
        </div>
      </div>
    </div>
  </Section>
);
export default MiniTextPass;
