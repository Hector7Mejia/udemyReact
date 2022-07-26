import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
    };
    return(<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>
 );
}

export default NewExpense;