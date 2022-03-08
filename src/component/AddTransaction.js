import { useContext, useState } from "react";
import { Context } from "../store/Context";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  function generateUUID() {
    return uuidv4();
  }

  const { addTransaction } = useContext(Context);

  function handleAddTransaction(e) {
    e.preventDefault();
    if (!text || !amount) {
      return;
    }
    addTransaction({ id: generateUUID(), text, amount });
  }

  return (
    <>
      <h2 className="subheading margin-top">Add transaction</h2>
      <div className="form">
        <form>
          <section className="input-div">
            <label htmlFor="cashflow">Ingoings / Outgoings</label>
            <input
              type="text"
              id="cashflow"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </section>
          <section className="input-div">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </section>
          <button onClick={handleAddTransaction} className="btn submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
