/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 1rem 1.5rem;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-item {
    font-weight: 400;
    font-size: 1.3rem;
    :hover {
      color: ${props => props.theme.darkAccent};
    }
  }
  .navbar-burger {
    background-color: #1c1323;
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
              <Link className="navbar-item"  to="/">
                <img src="/images/logo-1025.png" alt="site logo" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-start navbar-end">
                <Link to="/" className="navbar-item has-text-white">
                  Home
                </Link>
                <Link to="/about" className="navbar-item has-text-white">
                  Features
                </Link>
                <Link to="/news" className="navbar-item has-text-white">
                  Pricing
                </Link>
                <div className="navbar-item has-dropdown ">
                  <a className="navbar-link has-text-white">Blog</a>
                  <div className="navbar-dropdown has-text-white is-active">
                    <a className="navbar-item has-text-white">Blog</a>
                    <a className="navbar-item has-text-white">Single Blog</a>
                  </div>
                </div>
                <div className="navbar-item has-dropdown">
                  <a className="navbar-link has-text-white">Page</a>
                  <div className="navbar-dropdown">
                    <a className="navbar-item has-text-white">Elements</a>
                    <a className="navbar-item has-text-white">Contact</a>
                  </div>
                </div>
                <Link to="/contact" className="navbar-item has-text-white">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
