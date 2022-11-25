import React, { useContext, useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { GlobalContext } from "../context/GlobalProvider";

export default function ProfitAndLoss() {
  const { transactions } = useContext(GlobalContext)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)

  useEffect(() => {  
    let expense = 0.0;
    let income = 0.0;
    transactions.forEach(t=>{
      expense += t.amount<0?-t.amount:0; 
      income  += t.amount>0?t.amount:0; 
    });
    setTotalExpense(expense);
    setTotalIncome(income);
  }, [transactions]);

  return (
    <div className="card container p-3 my-2 pnl">
      <div className="row">
        <div className="col-6">
          <p className="fs-6 fw-bold my-0">Income</p>
          <p className="fs-4 fw-bold my-0 text-success">
            <CurrencyFormat
              decimalScale={2}
              fixedDecimalScale={true}
              thousandSeparator={true}
              value={totalIncome}
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
              value={totalExpense}
              displayType={"text"}
              prefix={"$"}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
