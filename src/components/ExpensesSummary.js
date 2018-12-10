import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = (props) => {
	const pluralFixer = (props.expenses.length === 1) ? '' : 's';
	const totalCost = selectExpensesTotal(props.expenses) / 100;
	const formattedTotalCost = numeral(totalCost).format('$0,0.00');
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
					Viewing <span>{props.expenses.length}</span> expense{pluralFixer} totalling: <span>{formattedTotalCost}</span>
				</h1>
				<div className="page-header__actions">
					<Link className="button" to="/create">Add Expense</Link>
				</div>
			</div>
		</div>
	);
};


const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters),
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
