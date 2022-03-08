import Balance from "./component/Balance";
import Header from "./component/Header";
import Transactions from "./component/Transactions";
import AddTransaction from "./component/AddTransaction";
import { GlobalContext } from "./store/Context";

function App() {
  return (
    <>
      <GlobalContext>
        <Header />
        <div className="container">
          <Balance />
          <Transactions />
          <AddTransaction />
        </div>
      </GlobalContext>
    </>
  );
}

export default App;
