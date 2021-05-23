import { useState } from 'react';
import './TodoForm.css';

function TodoForm(props){
    const todayDate = new Date()
    const maxDate= new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString().slice(0, 10);
  
    const [enteredDate,setDate]= useState('');
    const [enteredTask,setTask]= useState('');
    const [errorMessage,setError]= useState('');

    const dateChangeHandler = (event)=> {
        setDate(event.target.value);
    }
    const taskChangeHandler = (event)=> {
        setTask(event.target.value);
    }
    const submitHandler =(event)=> {
        setError("");
        if(enteredDate !=="" &&  enteredTask !=="" ){
            event.preventDefault();
            const todoData ={
                id: Date.now(),
                satus: false,
                date: new Date(enteredDate),
                task: enteredTask
            };
            props.submitTodo(todoData);
            clearData();
        }
        else{
            event.preventDefault();
            setError("Please Enter All Fields...!");
        }

    }
    const clearData = ()=> {
        setDate('');
        setTask('');
    }
    
    return(
        <div className='new-item'>
            <form onSubmit={submitHandler}>
                {errorMessage && <div className='error'>{errorMessage}</div>}
                <div className='form-group row new-item__control'>
                    <div className='col-md-6 mb-3'>
                        <label>Date</label>
                        <input className='form-control'
                            type='date'
                            min= {todayDate}
                            max={maxDate}
                            value={enteredDate}
                            onChange={dateChangeHandler}
                        />
                    </div>
                    <div className='col-md-6 mb-3'>
                        <label>Task</label>
                        <input className='form-control' 
                            type='text'
                            value={enteredTask}
                            onChange={taskChangeHandler}
                        />
                    </div> 
                </div>
                <div className='row new-item__actions'>
                    <div className='col-sm-6 mb-3'><button type='button' onClick={clearData}>Clear</button></div>
                    <div className='col-sm-6 mb-3'><button type='submit'>Add Todo</button></div>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;