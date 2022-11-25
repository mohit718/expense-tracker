import { createContext, useEffect, useReducer } from "react";
import { TransactionService } from "../services/TransactionService";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

// Global context
export const GlobalContext = createContext(initialState);

// Global State
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    TransactionService.fetchAll().then(transactions => {
      dispatch({
        type: "INIT_TRANSACTIONS",
        payload: transactions,
      });
    });
  }, []);

  function addTransaction(transaction) {
    TransactionService.save(transaction).then(t => {
      dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction,
      });
    });
  }

  function deleteTransaction(id) {
    TransactionService.delete(id).then(oldTransaction=>{
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      })
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
