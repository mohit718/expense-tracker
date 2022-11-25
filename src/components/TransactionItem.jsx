import React from "react";
import CurrencyFormat from "react-currency-format";

export default function TransactionItem({ transaction, deleteTransaction }) {
  return (
    <div className="d-flex justify-content-between">
      <div
        className={`card flex-row justify-content-between p-1 px-2 m-1 w-100 ${
          Number.isInteger(transaction.amount)
            ? transaction.amount >= 0
              ? "label-success"
              : "label-danger"
            : "label-secondary"
        }`}>
        <p className="my-0 text-uppercase text-nowrap overflow-hidden mx-1">{transaction.name ?? "Unknown"}</p>
        <p
          className={`my-0 ${
            Number.isInteger(transaction.amount)
              ? transaction.amount >= 0
                ? "text-success"
                : "text-danger"
              : "text-secondary"
          }`}>
          {Number.isInteger(transaction.amount) ? (
            <CurrencyFormat
              decimalScale={2}
              fixedDecimalScale={true}
              thousandSeparator={true}
              value={transaction.amount}
              displayType={"text"}
              prefix={"$"}
            />
          ) : (
            "N.A"
          )}
        </p>
      </div>
      <button
        type="button"
        className="btn btn-outline-danger my-1"
        onClick={() => deleteTransaction(transaction.id)}>
        X
      </button>
    </div>
  );
}
