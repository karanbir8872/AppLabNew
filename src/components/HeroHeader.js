import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: -42rem;
  h1 {
    font-size: 5rem;
    line-height: 1.2;
  }
  .para {
    font-size: 25px;
    font-weight: 300;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  .pic {
    margin-top: -4rem;
  }
  .bcolor {
    background: #37ebed;
    font-size: 30px;
    border: none;
  }
`;
const HeroHeader = () => (
  <div className="section">
    <Container className="container">
      <div className="columns">
        <div className="column is-three-fifths has-text-left">
          <h1 className="h1 has-text-white">Promote Your App With Applab</h1>
          <p className="h1 has-text-white para">
            Get more users to promote your app with this template
          </p>
          <button className="button is-large has-text-white bcolor">
            Get Start Now
          </button>
        </div>
        <div className="column is-half has-text-centered pic">
          <img src="/images/phone.png" alt="site logo" />
        </div>
      </div>
    </Container>
  </div>
);
export default HeroHeader;
