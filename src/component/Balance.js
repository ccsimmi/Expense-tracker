const Balance = ({ balance }) => {
  return (
    <div className="balance">
      <span className="currency">£</span>
      <p className="cash-amount">{balance}</p>
    </div>
  );
};

export default Balance;
