import React from 'react';
import Sidebar from './common/Sidebar';

console.log('woop!');

export default () =>
		<div className="row">
				<Sidebar active="about"/>
				<div className="col-sm-9 col-md-10 offset-sm-3 offset-md-2">
						About
				</div>
		</div>
;