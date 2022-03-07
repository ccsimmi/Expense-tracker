import Balance from "./component/Balance";
import Header from "./component/Header";
import Transaction from "./component/Transaction";
import AddTransaction from "./component/AddTransaction";

function App() {
  const DUMMY_DATA = {
    balance: 1000,
    history: [
      { id: 1, text: "Grocery shopping", amount: 200, expense: true },
      { id: 2, text: "Tutoring", amount: 120, expense: false },
      { id: 3, text: "Bowling social", amount: 40, expense: true },
    ],
  };

  return (
    <>
      <Header />
      <div className="container">
        <Balance balance={DUMMY_DATA.balance} />
        <Transaction />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
