import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState(2020)
  const onYearChange = (year) => {
    setSelectedYear(year)
  }
  return (
    <div> 
      <Card className="expenses">
        <ExpensesFilter onYearChange={onYearChange} selectedYear={selectedYear}/>   
        {props.items.filter((item) => item.date.getFullYear() === parseInt(selectedYear)).map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
