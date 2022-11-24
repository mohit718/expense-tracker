import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

export default function TransactionForm({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [floatAmount, setFloatAmount] = useState(0.0);

  const onSubmit = e => {
    e.preventDefault();
    let newTransaction = {
      name: text,
      amount: floatAmount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
    setFloatAmount(0.0);
  };

  return (
    <div className="text-start my-4">
      <h6 className="fw-bold">Add New Transaction</h6>
      <hr className="my-1" />
      <form onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="text" className="fw-italic">
            Text
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Enter Text"
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="amount" className="fw-italic">
            Amount&nbsp;
            <small id="amountHelp" className="form-text text-muted">
              (Positive value for income, and negative for expense)
            </small>
          </label>
          <CurrencyFormat
            className="form-control"
            id="amount"
            aria-describedby="amountHelp"
            placeholder="Enter Amount"
            value={amount}
            onValueChange={amount => {
              setAmount(amount.formattedValue);
              setFloatAmount(amount.floatValue);
            }}
            thousandSeparator={true}
            prefix={"$"}
            required
          />
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
