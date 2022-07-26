import  './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem(props) {
    //useState(props.whatever) will always give an array with the current props and the updating function.
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        //no longer using = assignment while using useState()
        // title = "updated;"
        setTitle('Updated');
    };

    return (//jsx requires one overarching div as opposed to multiple root level divs
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;