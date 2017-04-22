import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './styles.css';

const nav = classNames('nav nav-pills flex-column', styles.nav);
const sidebar = classNames('col-sm-3 col-md-2 hidden-xs-down bg-faded', styles.sidebar);

const navLinkStyle = (active, current) =>
		classNames('nav-link', '/' + active === current ? 'active' : '' , styles.navLink);

const NavLink = ({ title, path, active }) =>
		<li className="nav-item">
				<Link className={ navLinkStyle(active, path) } to={ path }>
						{ title }
				</Link>
		</li>
;

const Sidebar = ({ active }) =>
		<nav className={ sidebar }>
				<ul className={ nav }>
						<NavLink path="/" title="Home page" active={ active }/>
						<NavLink path="/about" title="About page" active={ active }/>
				</ul>
		</nav>
;

export default Sidebar;