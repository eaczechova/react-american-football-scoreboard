import React from 'react';
import './App.css';

const Buttons = ({ onClick }) => {
	return (
		<div>
			<div className="homeButtons">
				{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
				<button
					className="homeButtons__touchdown"
					onClick={() => onClick('home', 7)}
				>
					Home Touchdown
				</button>
				<button
					className="homeButtons__fieldGoal"
					onClick={() => onClick('home', 3)}
				>
					Home Field Goal
				</button>
			</div>
			<div className="awayButtons">
				<button
					className="awayButtons__touchdown"
					onClick={() => onClick('away', 7)}
				>
					Away Touchdown
				</button>
				<button
					className="awayButtons__fieldGoal"
					onClick={() => onClick('away', 3)}
				>
					Away Field Goal
				</button>
			</div>
		</div>
	);
};

export default Buttons;
