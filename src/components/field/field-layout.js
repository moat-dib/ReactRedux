import PropTypes from 'prop-types';
import { Component } from 'react';
import { PLAYER, PLAYER_SIGN } from '../../constants';
import styles from './field.module.css';

export class FieldLayout extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={styles.field}>
				{this.props.field.map((cellPlayer, index) => (
					<button
						key={index}
						className={styles.cell}
						onClick={() => this.props.handleCellClick(index)}
					>
						{PLAYER_SIGN[cellPlayer]}
					</button>
				))}
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func,
};
