import React from 'react';
import PropTypes from 'prop-types';

import { StaticImage } from 'gatsby-plugin-image';

const NavbarItem = props => (
  <li>
    <a className="navbar-item is-capitalized" href={props.link}>
        {props.name}
    </a>
  </li>
);
const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </button>
);

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
  render() {
    let { pages = [], color } = this.props;
    let navLogoSize = 75;
    let navbarItems = pages.map(page => <NavbarItem name={page.name} key={page.name} link={page.link} />);
    return (
      <nav className={`navbar is-${color}`}>
        <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    {/* <StaticImage src="../../content/assets/blissful_ink.png" layout="fixed" width={navLogoSize} height={navLogoSize} alt="Blissful Ink" /> */}
                    <StaticImage src="../../content/assets/blissful_ink.png" height={75} alt="Blissful Ink" />
                </a>
                {/* <NavbarItem name="logo" link="/" /> */}
                <NavbarBurger
                    active={this.state.activeMenu}
                    toggleMenu={this.toggleMenu}
                />
            </div>
            <div
                className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}
                >
                <ul className="navbar-end">{navbarItems}</ul>
            </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  pages: PropTypes.array.isRequired,
  color: PropTypes.string,
};
