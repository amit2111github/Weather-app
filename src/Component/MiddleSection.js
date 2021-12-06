import React from 'react';
const MiddleSection = ({ values, city, handleChange, handleSubmit, errorMessage, loadingMessage }) => {
	const { error, loading } = values;
	return (
		<div className="column-2" style={{ backgroundColor: '#2e49b3' }}>
			<div className="row">
				{error && errorMessage()}
				{loading && loadingMessage()}
				<div className="column-00">
					<i className="fas fa-search"></i>
				</div>
				<div className="column-0 row">
					<form className="example">
						<input
							className="text-success"
							type="text"
							placeholder="City Name"
							value={city}
							onChange={handleChange}
						/>
					</form>
					<div>
						<button className="btn btn-lg rounded btn-primary" onClick={handleSubmit}>
							Search
						</button>
					</div>
				</div>
			</div>
			<div className="row mt-4">
				<div className="column-01">
					<h1>Weather Forecast</h1>
				</div>
				<div className="column-02">
					<i className="fas fa-cog"></i>
				</div>
			</div>
			<div className="row">
				<div className="column-2-1"></div>
				<div className="column-2-2"></div>
				<div className="column-2-3"></div>
			</div>

			<div className="row">
				<div className="column-2-1" style={{ paddingBottom: '10px' }}></div>
				<div className="column-2-2"></div>
				<div className="column-2-3"></div>
			</div>
		</div>
	);
};

export default MiddleSection;
