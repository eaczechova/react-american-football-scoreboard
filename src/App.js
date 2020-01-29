//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import Buttons from './Buttons';

function App() {
	//TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
	const initialValueLions = 0;
	const initialValueTigers = 0;

	const [valueLions, setValueLions] = useState(initialValueLions);
	const touchdownLions = () => {
		setValueLions(valueLions + 7);
	};

	const fieldGoalLions = () => {
		setValueLions(valueLions + 3);
	};

	const [valueTigers, setValueTigers] = useState(initialValueTigers);
	const touchdownTigers = () => {
		setValueTigers(valueTigers + 7);
	};

	const fieldGoalTigers = () => {
		setValueTigers(valueTigers + 3);
	};

	return (
		<div className="container">
			<section className="scoreboard">
				<div className="topRow">
					<div className="home">
						<h2 className="home__name">Lions</h2>

						{/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

						<div className="home__score">{valueLions}</div>
					</div>
					<div className="timer">00:03</div>
					<div className="away">
						<h2 className="away__name">Tigers</h2>
						<div className="away__score">{valueTigers}</div>
					</div>
				</div>
				<BottomRow />
			</section>
			<section className="buttons">
				<Buttons
					onClick1={touchdownLions}
					onClick2={fieldGoalLions}
					onClick3={touchdownTigers}
					onClick4={fieldGoalTigers}
				/>
			</section>
		</div>
	);
}

export default App;
