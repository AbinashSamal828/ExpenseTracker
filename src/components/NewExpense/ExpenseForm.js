import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
    // console.log(title);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
    // console.log(amount);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
    // console.log(date);
  };

  // const callForm = (event) => {
  //   event.preventDefault();
  //   setForm(form);
  // };
  const formHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: title,
      amount: +parseInt(amount),
      date: new Date(date),
    };

    // console.log(ExpenseData);
    props.onSaveExpenseData(ExpenseData);
    setTitle("");
    setAmount("");
    setDate("");
    // setForm(addNew);
  };
  const form = (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={amountHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" value={date} onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.cancelEdit}>CANCEL</button>
        <button type="submit">ADD</button>
      </div>
    </form>
  );
  // const [presentForm,setForm]=useState(form);
  
  // const addNew = (
  //   <form onSubmit={callForm}>
  //     <div className="new-expense__actions">
  //       <button type="submit">Add New Expense</button>
  //     </div>
  //   </form>
  // );

  return form;
}

export default ExpenseForm;
