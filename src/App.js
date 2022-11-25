import Balance from "./components/Balance";
import Header from "./components/Header";
import ProfitAndLoss from "./components/ProfitAndLoss";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row p-2">
        <div className="col-12 d-md-block d-flex justify-content-center">
          <Header />
        </div>
        <div className="col-12 col-md-4">
          <TransactionForm />
        </div>
        <div className="col-md-1"></div>
        <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
          <Balance />
          <ProfitAndLoss />
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default App;
