import React from 'react';
import './App.css';

const Buttons = ({ onClick1, onClick2, onClick3, onClick4 }) => {
	return (
		<div>
			<div className="homeButtons">
				{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
				<button className="homeButtons__touchdown" onClick={onClick1}>
					Home Touchdown
				</button>
				<button className="homeButtons__fieldGoal" onClick={onClick2}>
					Home Field Goal
				</button>
			</div>
			<div className="awayButtons">
				<button className="awayButtons__touchdown" onClick={onClick3}>
					Away Touchdown
				</button>
				<button className="awayButtons__fieldGoal" onClick={onClick4}>
					Away Field Goal
				</button>
			</div>
		</div>
	);
};

export default Buttons;
