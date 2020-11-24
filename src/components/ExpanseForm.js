import React, { useState } from "react";

export default function ExpanseForm(props) {
  const {
    handleCharge,
    handleAmount,
    handleSubmit,
    charge,
    amount,
    edit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">charge</label>
          <input
            type="text"
            className="form-control"
            name="charge"
            id="charge"
            placeholder="charge"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expense">amount</label>
          <input
            type="text"
            className="form-control"
            name="amount"
            id="amount"
            placeholder="amount"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "Edit" : "Submit"}
      </button>
    </form>
  );
}
