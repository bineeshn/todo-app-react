import './App.css';
import Todos from './Components/Todos/Todos'
import TodoForm from "./Components/Todos/TodoForm";
import {useState} from 'react'
import Card from './Components/UI/Card';
import Header from './Components/UI/Header';

const DUMMY_EXPENSES = [
  {
    id: 1,
    status: false,
    task: 'wash Clothes',
    date: new Date(2020, 7, 14),
  },
  { id: 2, status: true, task: 'New TV', date: new Date(2021, 2, 12) },
  {
    id: 3,
    status: true,
    task: 'Car Insurance',
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    status: false,
    task: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [items,setItems] = useState(DUMMY_EXPENSES);

  const newTodo = (todo)=> {
    setItems((prevData)=> {
      return[todo, ...prevData];
    })
  };
  const changeStatus = (id,status)=>{
    setItems((
      items.filter(item =>{
        if(item.id===id){
          item.status=status
        }
        return item;
      })
    ))
  };
  const deleteItem = (id)=> {
    setItems(()=> items.filter(item =>item.id !== parseInt(id)));
  };
  return (
    <Card className='todo'>
      <Header title='Todo App'/>
      <TodoForm submitTodo={newTodo}/>
      <Todos 
        items={items}
        changeStatus={changeStatus}
        deleteItem={deleteItem}
      />
    </Card>
  );
}

export default App;
