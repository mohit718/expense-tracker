import React from "react";
import CurrencyFormat from "react-currency-format";

export default function ProfitAndLoss({ income, expense }) {
  return (
    <div className="card container p-3 my-2">
      <div className="row">
        <div className="col-6">
          <p className="fs-6 fw-bold my-0">Income</p>
          <p className="fs-4 fw-bold my-0 text-success">
            <CurrencyFormat
              decimalScale={2}
              fixedDecimalScale={true}
              thousandSeparator={true}
              value={income}
              displayType={"text"}
              prefix={"$"}
            />
          </p>
        </div>
        <div className="col-6">
          <p className="fs-6 fw-bold my-0">Expense</p>
          <p className="fs-4 fw-bold my-0 text-danger">
          <CurrencyFormat
              decimalScale={2}
              fixedDecimalScale={true}
              thousandSeparator={true}
              value={expense}
              displayType={"text"}
              prefix={"$"}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
