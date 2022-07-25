import  './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {


    return (//jsx requires one overarching div as opposed to multiple root level divs
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;