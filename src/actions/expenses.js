import uuid from 'uuid';
import database from '../firebase/firebase';
import expensesFixture from '../tests/fixtures/expenses';

// ADD_EXPENSE
export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
});

export const startAddExpense = (expenseData = {}) => {
	return (dispatch) => {
		const {
			description = '',
			note = '',
			amount = 0,
    		createdAt = 0
		} = expenseData;
		const expense = { description, note, amount, createdAt };

		return database.ref('expenses').push(expense).then((ref) => {
			dispatch(addExpense({
				id: ref.key,
				...expense,
			}));
		});
	};
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
	type: 'SET_EXPENSES',
	expenses
});

export const startSetExpenses = () => {
	return (dispatch) => {
		return database.ref('expenses')
			.once('value').then((snapshot) => {
				const expenses = [];
				snapshot.forEach((childSnapshot) => {
					expenses.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					});
				});
				dispatch(setExpenses(expenses));
			});
	};
};

// This code is a copy of what was in "startaddexpenses"
	// return (dispatch) => {
	// 	const {
	// 		description = '',
	// 		note = '',
	// 		amount = 0,
	// 		createdAt = 0
	// 	} = expenseData;
	// 	const expense = { description, note, amount, createdAt };

	// 	return database.ref('expenses').push(expense).then((ref) => {
	// 		dispatch(addExpense({
	// 			id: ref.key,
	// 			...expense,
	// 		}));
	// 	});
	// };

// This code is the code Andrew indicated might be useful to parse the fetched info into an array
	// database.ref('expenses')
	// 	.on('value', (snapshot) => {
	// 		const expenses = [];

	// 		snapshot.forEach((childSnapshot) => {
	// 			expenses.push({
	// 				id: childSnapshot.key,
	// 				...childSnapshot.val(),
	// 			});
	// 		});

	// 		console.log(expenses);
	// 	});


// 1. Fetch all expense data (from firebase) once
// 2. Parse that data into an array
// 3. Dispatch that array using SET_EXPENSES