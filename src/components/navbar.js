import React from 'react';
import PropTypes from 'prop-types';

import { StaticImage } from 'gatsby-plugin-image';

const NavbarItem = props => (
  <a className="navbar-item is-capitalized" href={props.link}>
    {props.name}
  </a>
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
    let navbarItems = pages.map(page => <NavbarItem name={page.name} link={page.link} />);
    return (
      <nav className={`navbar is-${color}`}>
        <div class="container">
            <div className="navbar-brand">
                <a class="navbar-item" href="/">
                    <StaticImage src="../../content/assets/Blissful_Ink.png" layout="constrained" height="50" alt="Blissful Ink" />
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
                    <div className="navbar-end">{navbarItems}</div>
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
