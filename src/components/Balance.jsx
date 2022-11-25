import React, { useContext, useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { GlobalContext } from "../context/GlobalProvider";

export default function Balance() {
  const { transactions } = useContext(GlobalContext)
  const [balance, setBalance] = useState(0)
  
  useEffect(() => {
    let b=0;
    transactions.forEach(t=>(b+=t.amount));
    setBalance(b);
  }, [transactions]);
  
  return (
    <div className="text-start my-2">
      <h6 className="fw-bold" style={{ marginBottom: "-10px" }}>
        Your Balance
      </h6>
      <p className={`fs-2 fw-bold my-0 ${Number.isInteger(balance)?balance>=0?'text-success':'text-danger':'text-secondary'}`}>
      <CurrencyFormat
        decimalScale={2}
        fixedDecimalScale={true}
        thousandSeparator={true}
        value={balance}
        displayType={"text"}
        prefix={"$"}
      />
      </p>
    </div>
  );
}
