import Card from "../UI/Card";
import './TodoItem.css';
function TodoItem(props){
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    return(
        <li>
            <Card className='todo-item'>
                <div className='todo-item__description'>
                    <label className='checkbox-container'>
                    <input type='checkbox'/>
                    <span className='checkmark'></span></label>
                    <div className='todo-date'>
                        <div className='todo-date__month'>{month}</div>
                        <div className='todo-date__year'>{year}</div>
                        <div className='todo-date__day'>{day}</div>
                    </div>
                    <h2>{props.title}</h2>
                    <button className='todo-item__button'>X</button>
                </div>
            </Card>
        </li>
    )
}
export default TodoItem;