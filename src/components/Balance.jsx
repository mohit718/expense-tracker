import React from "react";
import CurrencyFormat from "react-currency-format";

export default function Balance({ amount }) {
  return (
    <div className="text-start my-2">
      <h6 className="fw-bold" style={{ marginBottom: "-10px" }}>
        Your Balance
      </h6>
      <p className={`fs-2 fw-bold my-0 ${Number.isInteger(amount)?amount>=0?'text-success':'text-danger':'text-secondary'}`}>
      <CurrencyFormat
        decimalScale={2}
        fixedDecimalScale={true}
        thousandSeparator={true}
        value={amount}
        displayType={"text"}
        prefix={"$"}
      />
      </p>
    </div>
  );
}
