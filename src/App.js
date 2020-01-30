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

	let [count, setCount] = useState(0);

	useEffect(() => {
		let timer;

		if (count > 58) {
			clearInterval(timer);
		} else {
			timer = setInterval(() => {
				setCount(count + 1);
			}, 1000);
		}
		return () => clearInterval(timer);
	});

	let [quarter, setQuarter] = useState(1);

	useEffect(() => {
		count < 15
			? setQuarter(1)
			: count < 30
			? setQuarter(2)
			: count < 45
			? setQuarter(3)
			: setQuarter(4);
	}, [count]);

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
					<div className="timer">{`00 :${count}`}</div>
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
