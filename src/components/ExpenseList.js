import ExpenseItem from "./ExpenseItem";
import React from "react";

export default function ExpenseList({
  expenses,
  handleEdit,
  handleDelete,
  clearitems,
}) {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearitems}>
          clear expenses
        </button>
      )}
    </>
  );
}
