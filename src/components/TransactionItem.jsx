import React from "react";
import CurrencyFormat from "react-currency-format";

export default function TransactionItem({ transaction }) {
  return (
    <div className={`card flex-row justify-content-between p-1 px-2 my-1 ${Number.isInteger(transaction.amount)?transaction.amount>=0?'label-success':'label-danger':'label-secondary'}`}>
      <p className="my-0 text-uppercase">{transaction.name ?? "Unknown"}</p>
      <p className={`my-0 ${Number.isInteger(transaction.amount)?transaction.amount>=0?'text-success':'text-danger':'text-secondary'}`}>
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
  );
}
