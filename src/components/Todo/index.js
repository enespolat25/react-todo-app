import Footer from 'components/Todo/Footer';
import Form from 'components/Todo/Form';
import List from 'components/Todo/List';
import React, {useState} from 'react';

const initialTodos = [
    {text: 'Learn JavaScript', isCompleted: true},
    {text: 'Learn React', isCompleted: false},
    {text: 'Have a life!', isCompleted: false}
];

const checkFilter = (filter, item) => {

    switch (filter) {
        case 'all':
            return true;
        case 'active':
            return !item.isCompleted;
        case 'completed':
            return item.isCompleted;
        default:
            return false;
    }
};

const getUncompletedTodoCount = (todos) => {
    return todos.filter(todo => !todo.isCompleted).length;
};

function Todo() {

    const [todos, setTodos] = useState(initialTodos);
    const [filter, setFilter] = useState('all');

    const removeAllCompletedTodos = () => {
        const filteredTodos = todos.filter(todo => !todo.isCompleted);
        setTodos(filteredTodos);
    };

    return (
        <section className="todoapp">

            <header className="header">
                <h1>todos</h1>
                <Form todos={todos} setTodos={setTodos}/>
            </header>

            <List todos={todos} setTodos={setTodos} filter={filter} checkFilter={checkFilter}/>

            <Footer
                filter={filter}
                setFilter={setFilter}
                uncompletedTodoCount={getUncompletedTodoCount(todos)}
                clearCompletedTodos={removeAllCompletedTodos}
            />

        </section>
    );
}

export default Todo;
