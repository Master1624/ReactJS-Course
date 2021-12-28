import './ExpensesList.css'

import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  const expenseItems = props.items.map((expense) => {
		return (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		);
	});

	let expensesContent = <h2 className='expenses-list__fallback'>Found no expenses.</h2>
	if(props.items.length > 0){
		expensesContent = expenseItems
	}

  return (
    <ul className='expenses-list'>
      {expensesContent}
    </ul>
  )
};

export default ExpensesList;
