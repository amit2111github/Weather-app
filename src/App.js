import React, { useState } from 'react';
import LeftSection from './Component/LeftSection';
import MiddleSection from './Component/MiddleSection';
import RightSection from './Component/RightSection';
const App = () => {
	const [city, setCity] = useState('');
	const [values, setValues] = useState({ error: '', loading: '' });
	const [data, setData] = useState(false);
	const { error } = values;
	const handleChange = (event) => {
		console.log(event.target.value);
		setCity(event.target.value);
	};
	const errorMessage = () => {
		return (
			<div className="alert alert-warning messages container" style={{ marginLeft: '300px' }}>
				<h4 className="text-center">{error}</h4>
			</div>
		);
	};
	const key = 'dfa1f732446f422bb138f907523985c5';
	const loadingMessage = () => {
		return (
			<div className="alert alert-success messages">
				<h2 className="text-center">Processing...</h2>
			</div>
		);
	};

	const handleSubmit = async () => {
		if (!city) return;
		setValues({ ...values, loading: true });
		let response = await fetch(` https://api.weatherbit.io/v2.0/current?key=${key}&city=${city}`);
		response = await response.json();
		setCity('');
		if (response.error) {
			setValues({ ...values, loading: false, error: response.error });
			return;
		}
		setValues({ ...values, loading: false });
		setData(response.data[0]);
	};
	return (
		<div className="full card">
			<div className="row card-body">
				<LeftSection />
				<MiddleSection
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					city={city}
					errorMessage={errorMessage}
					loadingMessage={loadingMessage}
					values={values}
				/>
				<RightSection data={data} />
			</div>
		</div>
	);
};

export default App;
