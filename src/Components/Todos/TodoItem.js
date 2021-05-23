import Card from "../UI/Card";
import './TodoItem.css';
function TodoItem(props){
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    const changeStatus = ()=> props.changeStatus(props.id,!props.status);
    const deleteItem = ()=> props.deleteItem(props.id);
    return(
        <li>
            <Card className='todo-item'>
                <div className='todo-item__description'>
                    <label className='checkbox-container'>
                        <input type='checkbox' checked={props.status} onChange={changeStatus}/>
                        <span className='checkmark'></span>
                    </label>
                    <div className='todo-date'>
                        <div className='todo-date__month'>{month}</div>
                        <div className='todo-date__year'>{year}</div>
                        <div className='todo-date__day'>{day}</div>
                    </div>
                    <h2>{props.title}</h2>
                    <button className='todo-item__button' onClick={deleteItem}>X</button>
                </div>
            </Card>
        </li>
    )
}
export default TodoItem;