
export default (expenses) => {
	const initialValue = 0;
	const total = expenses.reduce(
		(accumulator, currentValue) => accumulator + currentValue.amount
		, initialValue
	);

	return total;
};
