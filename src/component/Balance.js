import { Context } from "../store/Context";
import { useContext } from "react";

const Balance = () => {
  const { balance } = useContext(Context);

  return (
    <div className="balance">
      <span className="currency">£</span>
      <p className="cash-amount">{balance}</p>
    </div>
  );
};

export default Balance;
