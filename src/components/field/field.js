//import { useDispatch, useReduxState } from '../../redux-manager';
import { FieldLayout } from './field-layout';
import { checkEmptyCell, checkWin } from '../../utils';
//import { setCurrentPlayer, setField, setStatus } from '../../actions';
import { PLAYER, STATUS } from '../../constants';
import { Component, setState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';

export class Field extends Component {
	constructor(props) {
		super(props);
		//const { status, field, currentPlayer } = useReduxState();
		this.state = {
			status: props.status,
			field: props.field,
			currentPlayer: props.currentPlayer,
		};
	}
	handleCellClick = (cellIndex) => {
		if (
			this.state.status === STATUS.WIN ||
			this.state.status === STATUS.DRAW ||
			this.state.field[cellIndex] !== PLAYER.NOBODY
		) {
			return;
		}

		const newField = [...this.state.field];
		newField[cellIndex] = this.state.currentPlayer;

		//dispatch(setField(newField));
		this.setState({ field: newField });

		if (checkWin(newField, this.state.currentPlayer)) {
			//dispatch(setStatus(STATUS.WIN));
			this.setState({ status: STATUS.WIN });
		} else if (checkEmptyCell(newField)) {
			const newCurrentPlayer =
				this.state.currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
			//dispatch(setCurrentPlayer(newCurrentPlayer));
			this.setState({ currentPlayer: newCurrentPlayer });
		} else {
			//dispatch(setStatus(STATUS.DRAW));
			this.setState({ status: STATUS.DRAW });
		}
	};
	//getDerivedStateFromProps(props,state) ;

	render() {
		const handleCellClick = this.handleCellClick.bind(this);
		return <FieldLayout field={this.state.field} handleCellClick={handleCellClick} />;
	}
}
