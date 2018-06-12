import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const renderNavItems = navItems => {
  return navItems.map(({ itemLink, itemName }) => (
    <Link to={itemLink} key={itemName}>
      {itemName}
    </Link>
  ));
};

class NavBar extends React.Component {
  render() {
    const { navTitle, navItems } = this.props;
    return (
      <nav>
        <div className="nav">
          <div className="nav-header">
            <div className="nav-title">{navTitle}</div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span />
              <span />
              <span />
            </label>
          </div>
          <input type="checkbox" id="nav-check" />
          <div className="nav-links">{renderNavItems(navItems)}</div>
        </div>
      </nav>
    );
  }
}

NavBar.displayName = 'NavBar';

NavBar.propTypes = {
  navTitle: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      itemName: PropTypes.string.isRequired,
      itemLink: PropTypes.string.isRequired
    })
  )
};

export default NavBar;
