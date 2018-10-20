import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
	const result = selectExpensesTotal([]);
	expect(result).toBe(0);
});

test('should sum a series of expenses', () => {
	const result = selectExpensesTotal(expenses);
	expect(result).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});

test('should correctly add up a single expense', () => {
	const result = selectExpensesTotal([expenses[1]]);
	expect(result).toEqual(expenses[1].amount);
});
