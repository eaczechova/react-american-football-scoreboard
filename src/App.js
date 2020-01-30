//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import Buttons from './Buttons';

function App() {
	//TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
	const initialValueLions = 0;
	const initialValueTigers = 0;

	const [valueLions, setValueLions] = useState(initialValueLions);
	const [valueTigers, setValueTigers] = useState(initialValueTigers);

	// TIMER FUNCTION

	let [seconds, setTimer] = useState(0);

	const formatTime = seconds => {
		let date = new Date(seconds * 1000);

		let mm = date.getMinutes();
		let ss = date.getSeconds();

		if (mm < 10) {
			mm = '0' + mm;
		}
		if (ss < 10) {
			ss = '0' + ss;
		}
		return mm + ':' + ss;
	};

	useEffect(() => {
		let timer;
		if (seconds > 3599) {
			return () => clearInterval(timer);
		}
		timer = setInterval(() => {
			setTimer(seconds + 1);
		}, 1000);
		return () => clearInterval(timer);
	});

	let [quarter, setQuarter] = useState(1);

	useEffect(() => {
		seconds < 900
			? setQuarter(1)
			: seconds < 1800
			? setQuarter(2)
			: seconds < 2700
			? setQuarter(3)
			: setQuarter(4);
	}, [seconds]);

	const scoreHandler = (team, amount) => {
		team === 'home'
			? setValueLions(valueLions + amount)
			: setValueTigers(valueTigers + amount);
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
					<div className="timer">{formatTime(seconds)}</div>
					<div className="away">
						<h2 className="away__name">Tigers</h2>
						<div className="away__score">{valueTigers}</div>
					</div>
				</div>
				<BottomRow quarter={quarter} />
			</section>
			<section className="buttons">
				<Buttons onClick={scoreHandler} />
			</section>
		</div>
	);
}

export default App;
