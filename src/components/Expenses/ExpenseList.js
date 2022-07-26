import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.yearExpense.length === 0) {
    return <div className="expenses-list__fallback">No Expense Found</div>;
  }
  return (
    <li className="expenses-list">
      {props.yearExpense.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        ></ExpenseItem>
      ))}
    </li>
  );
}

export default ExpenseList;
