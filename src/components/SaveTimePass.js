import React from 'react';
import styled from 'styled-components';
import SaveTimeCompt from './SaveTimeCompt';

const Section = styled.div``;

const SaveTimePass = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-one-third has-text-centered ">
          <SaveTimeCompt
            text="Manage team in
                 One Place"
            img="/images/team.png"
          />
        </div>
        <div className="column is-one-third has-text-centered">
          <SaveTimeCompt
            text="All-powerful Pointing
                  has no control"
            img="/images/hand.png"
          />
        </div>
        <div className="column is-one-third has-text-centered">
          <SaveTimeCompt
            text="Establish a solid online presence"
            img="/images/online-support.png"
          />
        </div>
      </div>
    </div>
  </Section>
);
export default SaveTimePass;
