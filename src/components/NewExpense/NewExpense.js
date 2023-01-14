import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [isEdititng, setIsEdititng] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdititng(false);
  };

  const startIsEditingHandler = () => setIsEdititng(true);
  const stopEditingHandler = () => setIsEdititng(false);

  return (
    <div className="new-expense">
      {!isEdititng && (
        <button onClick={startIsEditingHandler}>Add New Expense</button>
      )}
      {isEdititng && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
