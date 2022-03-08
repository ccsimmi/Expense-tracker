import { Context } from "../store/Context";
import { useContext, useEffect, useState } from "react";

const Balance = () => {
  const [balance, setBalance] = useState();
  const { transactionList } = useContext(Context);

  useEffect(() => {
    const incomeAndExpenses = [];
    transactionList.map((transaction) =>
      incomeAndExpenses.push(parseInt(transaction.amount))
    );

    let total = incomeAndExpenses.reduce((prev, current) => {
      return prev + current;
    }, 0);

    setBalance(total);
  }, [transactionList]);

  return (
    <div className="balance">
      <span className="currency">£</span>
      <p className="cash-amount">{balance}</p>
    </div>
  );
};

export default Balance;
