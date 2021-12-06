import React from 'react';

const RightSection = ({ data }) => {
	return (
		<div className="column-3" style={{ backgroundColor: '#3d94eb' }}>
			<div className="slideshow-container">
				<div className="mySlides fade">
					<div className="div2">
						<i className="fas fa-sun" style={{ fontSize: '20px' }}>
							<br />
							{data && data.app_temp + "'c "}
						</i>
					</div>
					<h2 className="ak">Weather description</h2>
					<h2 className="ak">{data.weather ? data.weather.description : 'Its a Hot day'}</h2>
					<h3 className="ak">INFO</h3>
					<button className="btn" style={{ fontSize: '20px' }}>
						<i className="fas fa-wind"></i>
						<br />
						{data && data.wind_spd + ' km/h'}
					</button>
					<button className="btn">
						<i className="fas fa-tint"></i>
					</button>
					<button className="btn" style={{ fontSize: '20px' }}>
						<i className="fas fa-thermometer-quarter"></i>
						<br />
						{data && data.temp + " 'c"}
					</button>
					<br />
					<button className="btn">
						<i className="fas fa-plus"></i>
					</button>
					{data && (
						<>
							<h3 className="ak">
								CITY <span style={{ color: 'red' }}>{data.city_name}</span>
							</h3>
							<h4>{data && 'Time ' + data.datetime + ' ' + data.timezone}</h4>
							<button className="btn">
								<i className="fas fa-cloud-showers-heavy"></i>
							</button>
							{data && ` Snow fall  ${data.clouds} %`}
							<br />
							<button className="btn">
								<i className="fas fa-umbrella"></i>
							</button>{' '}
							{data && 'Rain Prediction ' + data.precip + ' %'}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default RightSection;
