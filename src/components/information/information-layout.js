import PropTypes from 'prop-types';
import { Component } from 'react';

export class InformationLayout extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(this.props.information);
		// аналог useEffect() с пустым массивом зависимостей
	}
	render(information) {
		return <div>{this.props.information}</div>;
	}
}

//export const InformationLayout = ({ information }) => <div>{information}</div>;
//InformationLayout.propTypes = {
//	information: PropTypes.string,
//};
