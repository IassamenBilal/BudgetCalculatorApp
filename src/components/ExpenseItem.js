import React from "react";

export default function ExpenseItem({ expense, handleEdit, handleDelete }) {
  const { id, charge, amount } = expense;
  return (
    <>
      <li className="item">
        <div className="info">
          <span className="expense">{charge}</span>
          <span className="amount">${amount}</span>
        </div>
        <div>
          <button
            className="edit-btn"
            areal="edit button"
            onClick={() => {
              handleEdit(id);
            }}
          >
            Edit
          </button>
          <button
            className="clear-btn"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
}
