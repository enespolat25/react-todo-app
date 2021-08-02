import React, {useEffect, useState} from 'react';

function List({todos, setTodos, filter, checkFilter}) {

    const [isEachTodoCompleted, setIsEachTodoCompleted] = useState(false);
    const [updateTodoIndex, setUpdateTodoIndex] = useState(-1);

    useEffect(() => {
        setIsEachTodoCompleted(todos.every(todo => todo.isCompleted));
    }, [todos]);

    const handleToggleComplete = (index) => {
        updateTodo({isCompleted: !todos[index].isCompleted}, index);
    };

    const handleToggleAllComplete = () => {

        const newTodoList = todos.map(todo => {
            todo.isCompleted = !isEachTodoCompleted;
            return todo;
        });

        setTodos(newTodoList);
    };

    const handleUpdateTodoIndex = (index) => {
        setUpdateTodoIndex(index);
    };

    const handleOnBlur = (e, index) => {
        setUpdateTodoIndex(-1);

        if (e.target.value === '')
            return false;

        updateTodo({text: e.target.value}, index);
    };

    const removeTodo = (index) => {
        const filteredTodos = todos.filter((todo, i) => i !== index);
        setTodos(filteredTodos);
    };

    const updateTodo = (newTodo, index) => {
        let newTodoList = [...todos];
        let todo = newTodoList[index];
        newTodoList[index] = {...todo, ...newTodo};
        setTodos(newTodoList);
    };

    return (
        <div>
            <section className="main">
                <input className="toggle-all"
                       type="checkbox"
                       checked={isEachTodoCompleted}
                       onChange={handleToggleAllComplete}/>
                <label htmlFor="toggle-all" onClick={handleToggleAllComplete}>
                    Mark all as complete
                </label>

                <ul className="todo-list">

                    {todos.map((todo, i) => (

                        checkFilter(filter, todo)
                        &&
                        <li className={(todo.isCompleted ? 'completed' : '')} key={i}>
                            <div className="view">
                                <input className="toggle"
                                       type="checkbox"
                                       checked={todo.isCompleted}
                                       onChange={() => handleToggleComplete(i)}/>

                                {
                                    updateTodoIndex === i ?
                                        <input
                                            defaultValue={todo.text}
                                            className="mv-editor"
                                            autoFocus={true}
                                            onBlur={(e) => handleOnBlur(e, i)}
                                        />
                                        :
                                        <>
                                            <label onClick={() => handleUpdateTodoIndex(i)}>{todo.text}</label>
                                            <button className="destroy" onClick={() => removeTodo(i)}/>
                                        </>
                                }

                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default List;
