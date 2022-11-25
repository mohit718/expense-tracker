import Balance from "./components/Balance";
import Header from "./components/Header";
import ProfitAndLoss from "./components/ProfitAndLoss";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="mx-auto p-2 app text-center">
        <Header/>
        <Balance/>
        <ProfitAndLoss/>
        <TransactionList/>
        <TransactionForm/>
      </div>
    </div>
  );
}

export default App;
