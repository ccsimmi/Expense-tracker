import { createContext, useReducer } from "react";

const initialState = {
  balance: 1000,
  transactionList: [{ id: 1, text: "shopping", amount: 200, expense: true }],
};

export const Context = createContext();

export function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "delete_transaction",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "add_transaction",
      payload: transaction,
    });
  }

  return (
    <Context.Provider
      value={{
        balance: state.balance,
        transactionList: state.transactionList,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "delete_transaction":
      return {
        ...state,
        transactionList: state.transactionList.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "add_transaction":
      return {
        ...state,
        transactionList: [action.payload, ...state.transactionList],
      };
    default:
      throw new Error();
  }
}
