import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeroHeader from '../components/HeroHeader';
import Header from '../components/Header';
import SaveTime from '../components/SaveTime';
import SaveTimePass from '../components/SaveTimePass';
import ScreenShot from '../components/ScreenShot';
import MiniTextPass from '../components/MiniTextPass';
import MobilePartOne from '../components/MobilePartOne';
import MobilePartTwo from '../components/MobilePartTwo';

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
        <SaveTime />
        <SaveTimePass />
        <ScreenShot />
        <MiniTextPass />
        <MobilePartOne />
        <MobilePartTwo />
      </Layout>
    );
  }
}
