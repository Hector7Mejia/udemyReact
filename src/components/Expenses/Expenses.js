import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear}
                                onChangeFilter={filterChangeHandler}
                />
                {props.items.map(expenses =>
                    <ExpenseItem
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date}/>)}
            </Card>
        </div>
    );
};

export default Expenses;