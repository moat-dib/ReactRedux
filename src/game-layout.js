import PropTypes from 'prop-types';
import { Field, Information } from './components';
import styles from './game.module.css';
import { Component } from 'react';
import { STATUS, PLAYER } from './constants';
import { createEmptyField } from './utils';
const initialState = {
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
	field: new Array(9).fill(PLAYER.NOBODY),
};
const emptyField = new Array(9).fill(PLAYER.NOBODY);
export class GameLayout extends Component {
	constructor(props) {
		super(props);
		//this.setState({ status: STATUS.TURN });
		//this.setState({ currentPlayer: PLAYER.CROSS });
		//const emptyField = createEmptyField();
		//this.setState({ field: emptyField });
		this.state = {
			status: STATUS.TURN,
			currentPlayer: PLAYER.CROSS,
			field: emptyField,
		};
	}
	handleRestart() {
		this.setState = {
			status: STATUS.TURN,
			currentPlayer: PLAYER.CROSS,
			field: emptyField,
		};
	}
	useLayoutEffect() {
		this.setState({ status: STATUS.TURN });
		this.setState({ currentPlayer: PLAYER.CROSS });
		const emptyField = createEmptyField();
		this.setState({ field: emptyField });
		console.log('12', this.state.field);
	}
	componentDidMount() {
		console.log(this.state.field);
	}
	render() {
		const restart = this.handleRestart.bind(this);
		return (
			<div className={styles.game}>
				<Information state={this.state} />
				<Field state={this.state} />
				<button className={styles.restartButton} onClick={restart}>
					Начать заново
				</button>
			</div>
		);
	}
}

GameLayout.propTypes = {
	handleRestart: PropTypes.func,
};
