import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div>
		<button onClick={startLogin}>Login</button>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => {
		// console.log('Login started');
		return dispatch(startLogin());
	}
});

export default connect(undefined, mapDispatchToProps)(LoginPage);