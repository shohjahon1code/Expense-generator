import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

export default function Expense({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selected) => setFilteredYear(selected);

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}
