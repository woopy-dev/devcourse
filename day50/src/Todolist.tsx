import { useState } from 'react';
import './App.css';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '공부하기', isChecked: false },
    { id: 2, text: '잠자기', isChecked: false },
    { id: 3, text: '미팅하기', isChecked: false }
  ]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const title: string = "오늘 할 일"

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map(item => item.id === itemId ? { ...item, isChecked: !item.isChecked } : item)
    )
  }

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo('');
    }
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  }

  const handleCloseDetail = () => {
    setShowDetail(false);
  }

  return (
    <div className='container'>
      <h1>{title}</h1>
      <div>
        <input type='text'
          placeholder='할 일을 입력하세요'
          style={{ marginRight: '10px', writingMode: 'horizontal-tb' }}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <div className='board'>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} onClick={() => handleTodoClick(todo)}>
              <input type='checkbox' onChange={() => { handleCheckedChange(todo.id) }}></input>
              <span>
                {
                  todo.isChecked ? <del>{todo.text}</del> : <span>{todo.text}</span>
                }
              </span>
              <button onClick={() => removeTodo(todo.id)}
              >삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList;