import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props){

      return (
        <Card className="expenses">
          <ExpenseItem title={props.el[0].title} 
          amount={props.el[0].amount} 
          date={props.el[0].date}>
          </ExpenseItem>
    
          <ExpenseItem title={props.el[1].title} 
          amount={props.el[1].amount} 
          date={props.el[1].date}>
          </ExpenseItem>
    
          <ExpenseItem title={props.el[2].title} 
          amount={props.el[2].amount} 
          date={props.el[2].date}>
          </ExpenseItem>
    
          <ExpenseItem title={props.el[3].title} 
          amount={props.el[3].amount} 
          date={props.el[3].date}>
          </ExpenseItem>
        </Card>
      );
}

export default Expenses;