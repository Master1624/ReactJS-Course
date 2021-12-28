import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	let editing = "";
	const [isEditing, setIsEditing] = useState(false);
	const saveExpenseDataHander = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};
	const editingHandler = () => {
		setIsEditing(true);
	};
	const notEditingHandler = () => {
		setIsEditing(false);
	};
	if(isEditing){
		editing = <ExpenseForm onSaveExpenseData={saveExpenseDataHander} onCancel={notEditingHandler} />
	}
	else{
		editing = <button onClick={editingHandler}>Add New Expense</button>
	}
	return (
		<div className="new-expense">
			{editing}
		</div>
	);
};

export default NewExpense;
