const AddTransaction = () => {
  return (
    <>
      <h2 className="subheading margin-top">Add transaction</h2>
      <div className="form">
        <form>
          <section className="input-div">
            <label htmlFor="cashflow">Ingoings / Outgoings</label>
            <input type="text" id="cashflow" />
          </section>
          <section className="input-div">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" />
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
          <button className="btn submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
