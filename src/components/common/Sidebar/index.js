import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './styles.css';

import routes from '../../Router/config';

const navClassNames = classNames('nav nav-pills flex-column', styles.nav);
const sidebarClassNames = classNames(
  'col-sm-4 col-md-3 hidden-xs-down bg-faded',
  styles.sidebar,
);

const navLinkClassNames = (path, currentPath) =>
  classNames('nav-link', styles.navLink, { active: path === currentPath });

const MenuItem = ({ title, path, active }) => (
  <li className="nav-item">
    <Link className={navLinkClassNames(active, path)} to={path}>
      {title}
    </Link>
  </li>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
};

const renderSidebar = active =>
  route =>
    route.sidebar &&
    <MenuItem
      key={route.id}
      path={route.path}
      title={route.title}
      active={active}
    />;

const Sidebar = ({ active }) => (
  <nav className={sidebarClassNames}>
    <ul className={navClassNames}>
      {routes.map(renderSidebar(active))}
    </ul>
  </nav>
);

Sidebar.propTypes = {
  active: PropTypes.string.isRequired,
};

export default Sidebar;
