//import { useReduxState } from '../../redux-manager';
//import { useSelector } from 'react-redux';
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { InformationLayout } from './information-layout';
import { Component } from 'react';

export class Information extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this.state.information);
	}
	render() {
		const information =
			this.props.status === STATUS.DRAW
				? 'Ничья'
				: `${PLAYER_ACTION[this.props.status]}:
${PLAYER_NAME[this.props.currentPlayer]}`;
		//	status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;
		return <InformationLayout information={information} />;
	}
}
