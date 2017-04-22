import React from 'react';
import asyncComponent from '../common/asyncComponent';

const Home = asyncComponent(() =>
		System.import('../Home')
				.then(module => module.default), { name: 'Home' });

const About = asyncComponent(() =>
		System.import('../About')
				.then(module => module.default), { name: 'About' });

const Users = asyncComponent(() =>
		System.import('../Users')
				.then(module => module.default), { name: 'Users' });


export default [
		{
				path: '/',
				exact: true,
				sidebar: true,
				title: 'Home page',
				component: () => <Home/>
		},
		{
				path: '/about',
				sidebar: true,
				title: 'About page',
				component: () => <About/>,
		},
		{
				path: '/users',
				title: 'Users page',
				component: () => <Users/>,
		}
];