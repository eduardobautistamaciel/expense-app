import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //Below different way of adding Multple States
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredTitle(event.target.value);
    //Below different way of adding Multple States
    //  setUserInput((prevState) => {
    //  return { ...prevState, enterTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredAmount(event.target.value);
    //Below different way of adding Multple States
    // setUserInput((prevState) => {
    // return { ...prevState, enterAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredDate(event.target.value);
    //Below different way of adding Multple States
    //   setUserInput((prevState) => {
    //     return { ...prevState,  enterDate: event.target.value,};
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //Prevents the page of reload
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // Data sent to NewExpense.js
    //Two-way Binding - used to clear the form with sumit button is clicked
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //Two-way Binding - used to clear the form with sumit button is clicked
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount} //Two-way Binding - used to clear the form with sumit button is clicked
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate} //Two-way Binding - used to clear the form with sumit button is clicked
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
