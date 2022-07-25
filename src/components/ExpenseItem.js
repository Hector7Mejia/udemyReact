import  './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022,6,24);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.64;

    return (//jsx requires one overarching div as opposed to multiple root level divs
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>//objects need too be called upon differently ex. .toISOString
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;