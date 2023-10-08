import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

export const Expenses = ({expenses}) => {
    return <div className = "expenses">
    {
    expenses.map((expense) => (<ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
    />))
    }
    </div>

}