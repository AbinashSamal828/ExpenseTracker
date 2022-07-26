import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"

function NewExpense(props){
    const [editing,setEditing]=useState(true);
    const saveExpenseHandler=(eventData)=>{
        const expenseData={
            ...eventData,
            id:Math.random().toString()
        }
        props.addExpense(expenseData);
    }
    const cancelEdit=()=>{
        setEditing(true);
    }
    if(editing===true){
        return(
            <div className="new-expense">
                <button onClick={()=>{setEditing(false)}}>Add new Expense</button>
            </div>
        )
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler} cancelEdit={cancelEdit}/>
        </div>
    )
}

export default NewExpense;