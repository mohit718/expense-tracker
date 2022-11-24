import { useEffect, useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import ProfitAndLoss from "./components/ProfitAndLoss";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { TransactionService } from "./services/TransactionService";

function App() {
  const [balanceAmount, setBalanceAmount] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [transactions, setTransactions] = useState([])

  useEffect(()=>{
    TransactionService.fetchAll().then(t=>setTransactions(t));
  }, [])

  useEffect(() => {
    let expense = 0.0;
    let income = 0.0;
    transactions.forEach(t=>{
      expense += t.amount<0?-t.amount:0; 
      income  += t.amount>0?t.amount:0; 
    });
    setTotalExpense(expense);
    setTotalIncome(income);
    setBalanceAmount(income-expense);
  }, [transactions])
  
  function addTransaction(transaction){
    // const id = Math.floor(Math.random() * 1000) + 1;
    // let newTransaction = {...transaction, id:id}
    TransactionService.save(transaction).then(t=>setTransactions([...transactions, t]));
  }

  function removeTransaction(id){
    // const id = Math.floor(Math.random() * 1000) + 1;
    // let newTransaction = {...transaction, id:id}
    TransactionService.delete(id).then(oldTransaction=>setTransactions(transactions.filter(t=>t.id!==id)));
  }

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="mx-auto p-2 app text-center">
        <Header />
        <Balance amount={balanceAmount}/>
        <ProfitAndLoss income={totalIncome} expense={totalExpense}/>
        <TransactionList transactions={transactions}/>
        <TransactionForm addTransaction={addTransaction}/>
      </div>
    </div>
  );
}

export default App;
