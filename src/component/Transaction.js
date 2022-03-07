import TransactionItem from "./TransactionItem";

const Transaction = () => {
  return (
    <section>
      <h2 className="subheading">Transaction history</h2>
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
    </section>
  );
};

export default Transaction;
