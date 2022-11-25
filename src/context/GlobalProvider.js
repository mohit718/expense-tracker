import { createContext, useEffect, useState } from "react";
import { TransactionService } from "../services/TransactionService";

// Global context
const initialState = [];
export const GlobalContext = createContext(initialState);

// Global State
export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialState);

  useEffect(() => {
    TransactionService.fetchAll().then(t =>setTransactions(t));
  }, []);

  function addTransaction(transaction) {
    TransactionService.save(transaction).then(t => setTransactions([...transactions, t]));
  }

  function deleteTransaction(id) {
    TransactionService.delete(id).then(() => setTransactions(transactions.filter(t => t.id !== id)));
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
