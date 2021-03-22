import React, { useState } from 'react';
import debounce from 'lodash.debounce';

function Task_third() {
	const [value, setValue] = useState('');
	const [dbValue, saveToDb] = useState('');

	const handleChange = event => {
		const { value: nextValue } = event.target;
		setValue(nextValue);

		const debouncedSave = debounce(() => saveToDb(nextValue), 250);
		debouncedSave();
		
	};

	return (
		<div style={{textAlign:"center"}}>
            <h1 style={{color:"green",textAlign:"center"}}>Third Task</h1>
			<input type="text" value={value} onChange={handleChange} rows={5} cols={50} />
			<section className="panels">
				<div>
					<h2>Frontend</h2>
					{value}
				</div>
				<div>
					<h2>Backend</h2>
					{dbValue}
				</div>
			</section>
		</div>
	);
}

export default Task_third