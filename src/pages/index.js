import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeroHeader from '../components/HeroHeader';
import Header from '../components/Header';

const Topcontainer = styled.div`
  background-image: url(/images/banner.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 880px;
  z-index: 1;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Topcontainer>
          <Header />
        </Topcontainer>
        <HeroHeader />
      </Layout>
    );
  }
}
