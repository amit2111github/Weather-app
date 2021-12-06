import React from 'react';

const LeftSide = () => {
	return (
		<div className="column-1">
			<div className="div1">
				<i className="fas fa-bars" style={{ fontSize: '24px' }}></i>
			</div>
			<br />
			<div className="div1">
				<i className="fas fa-folder-open" style={{ fontSize: '24px' }}></i>
			</div>
			<br />
			<div className="div1">
				<i className="fas fa-cloud" style={{ fontSize: '24px' }}></i>
			</div>
			<br />
			<div className="div1">
				<i className="fas fa-archive" style={{ fontSize: '24px' }}></i>
			</div>
			<br />
			<div className="div1" style={{ marginTop: '270px' }}>
				<i className="fas fa-bell" style={{ fontSize: '24px', color: 'red' }}></i>
			</div>
			<br />
			<div className="div1">
				<i className="fas fa-user" style={{ fontSize: '24px', color: 'blue' }}></i>
			</div>
		</div>
	);
};
export default LeftSide;
