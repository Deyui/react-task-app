import React, {useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input type="text"
            placeholder="Update Task"
            value={input}
            name='text'
            className='todo-input edit'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className='todo-button edit'>Update</button>
            </>
        ) : (
            <>
            <input type="text"
            placeholder="Enter task"
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className='todo-button'>Add Task</button>
            <div class="select">
                <select name="todos" class="filter-todo">
                    <option value="all" id="status">All</option>
                    <option value="done" id="status">Done</option>
                    <option value="todo" id="status">To Do</option>
                </select>
            </div>
            </>
        ) }
        
    </form>
  )
}

export default TodoForm