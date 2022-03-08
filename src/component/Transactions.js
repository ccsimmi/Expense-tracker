import TransactionItem from "./TransactionItem";
import { Context } from "../store/Context";
import { useContext } from "react";

const Transactions = () => {
  const { transactionList } = useContext(Context);

  return (
    <section>
      <h2 className="subheading">Transaction history</h2>
      {transactionList.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          id={transaction.id}
          amount={transaction.amount}
          text={transaction.text}
        />
      ))}
    </section>
  );
};

export default Transactions;
