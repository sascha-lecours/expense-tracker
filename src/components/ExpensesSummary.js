import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = (props) => {
	const pluralFixer = (props.expenses.length === 1) ? '' : 's';
	const totalCost = selectExpensesTotal(props.expenses) / 100;
	const formattedTotalCost = numeral(totalCost).format('$0,0.00');
	return (
		<div>
			<h1>
				Viewing {props.expenses.length} expense{pluralFixer} totalling: {formattedTotalCost}
			</h1>
		</div>
	);
};


const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters),
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
