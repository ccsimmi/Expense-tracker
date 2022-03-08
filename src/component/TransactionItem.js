import { useContext } from "react";
import { Context } from "../store/Context";

const TransactionItem = ({ id, amount, text }) => {
  const { deleteTransaction } = useContext(Context);

  return (
    <div className="item">
      <p className="item-text">{text}</p>
      <div className="item-price">
        <p className={parseInt(amount) > 0 ? "income" : "expense"}>
          £{Math.abs(amount)}
        </p>
      </div>
      <button onClick={() => deleteTransaction(id)} className="btn">
        Remove
      </button>
    </div>
  );
};

export default TransactionItem;
