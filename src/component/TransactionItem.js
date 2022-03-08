import { useContext } from "react";
import { Context } from "../store/Context";

const TransactionItem = ({ id, amount, text }) => {
  const { deleteTransaction } = useContext(Context);

  return (
    <div className="item">
      <p className="item-text">{text}</p>
      <p className="item-price">£{amount}</p>
      <button onClick={() => deleteTransaction(id)} className="btn">
        Remove
      </button>
    </div>
  );
};

export default TransactionItem;
