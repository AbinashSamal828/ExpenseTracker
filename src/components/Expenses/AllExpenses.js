import "./AllExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart"

function AllExpenses(props) {
  const [year, setYear] = useState("2020");
  const changeYear = (year) => {
    setYear(year);
    // console.log(yearExpense);
    // console.log(year);
  };
  const yearExpense = props.expense.filter((element) => {
    return element.date.getFullYear() === parseInt(year);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} changeYear={changeYear} />
        <ExpensesChart expenses={yearExpense} />
        <ExpenseList yearExpense={yearExpense} />
        {/* <ExpenseItem
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expense[3].title}
        amount={props.expense[3].amount}
        date={props.expense[3].date}
      ></ExpenseItem> */}
      </Card>
    </div>
  );
}
export default AllExpenses;
