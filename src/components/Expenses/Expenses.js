import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    // const updateFilter = selectedDropdown => {
    //     selectedDropdown = props.date
    //     return <ExpenseItem
    //         key={props.id}
    //         title={props.title}
    //         amount={props.amount}
    //         date={props.date}/>
    // }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear}
                                onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;