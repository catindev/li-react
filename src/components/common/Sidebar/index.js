import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './styles.css';

import routes from '../../Router/config';

const navClasses = classNames('nav nav-pills flex-column', styles.nav);
const sidebarClasses = classNames('col-sm-3 col-md-2 hidden-xs-down bg-faded', styles.sidebar);

const navLinkStyle = (active, current) =>
		classNames('nav-link', '/' + active === current ? 'active' : '' , styles.navLink);

const NavLink = ({ title, path, active }) =>
		<li className="nav-item">
				<Link className={ navLinkStyle(active, path) } to={ path }>
						{ title }
				</Link>
		</li>
;

const renderSidebar = active => (route, index) => (
		route.sidebar
				? <NavLink key={index} path={ route.path } title={ route.title } active={ active }/>
				: ''
);

export default ({ active }) =>
		<nav className={ sidebarClasses }>
				<ul className={ navClasses }>
						{ routes.map( renderSidebar(active) ) }
				</ul>
		</nav>
;