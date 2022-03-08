import { useContext, useState } from "react";
import { Context } from "../store/Context";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  let id = 5;

  const { addTransaction } = useContext(Context);

  function handleAddTransaction(e) {
    e.preventDefault();
    addTransaction({ id: id + 1, text, amount });
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
            />
          </section>
          <section className="input-div">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </section>
          <section>
            <input
              type="radio"
              id="income"
              name="cashflow"
              value="income"
              className="radio"
            />
            <label className="label" htmlFor="income">
              Income
            </label>
            <input
              type="radio"
              id="expense"
              name="cashflow"
              value="expense"
              className="radio"
            />
            <label className="label" htmlFor="expense">
              Expense
            </label>
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
