import { useState } from 'react';
import './TodoForm.css';

function TodoForm(props){
  
    return(
        <form>
        <div className='form-group row new-expense__control'>
            <div className='col-md-6 mb-3'>
                <label>Date</label>
                <input className='form-control'
                    type='date'
                    min='2019-01-01'
                    max='2022-12-31'
                />
            </div>
            <div className='col-md-6 mb-3'>
                <label>Task</label>
                <input className='form-control' type='text'/>
            </div> 
        </div>
        <div className='row new-item__actions'>
            <div className='col-sm-6'><button type='button' >Cancel</button></div>
            <div className='col-sm-6'><button type='submit'>Add Expense</button></div>
        </div>
    </form>
    )
}

export default TodoForm;