import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import'./styles.css';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';


const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        
    }, [todos])

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })

    }

    const handleDelete = (todoId) => {

        const deleteAction = {
            type: 'delete',
            payload: todoId
        }

        dispatch(deleteAction)

    }

    const handleToggle = (todoId) => {
        const todoAction = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(todoAction);
    }
    

    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <hr/>

            <div className="row"> {/*TodoList*/}
                <div className="col-7">
                    <TodoList 
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>

                <div className="col-5">
                    <AddTodo 
                        handleAddTodo = {handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
