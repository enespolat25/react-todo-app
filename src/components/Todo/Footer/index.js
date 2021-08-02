/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Footer({filter, setFilter, uncompletedTodoCount, clearCompletedTodos}) {

    const handleOnClickFilter = (filter) => {
        setFilter(filter);
    };

    return (
        <footer className="footer">

            <span className="todo-count">
                <strong>{uncompletedTodoCount} </strong>
                 items left
            </span>

            <ul className="filters">
                <li>
                    <a className={filter === 'all' ? 'selected' : ''}
                       onClick={() => handleOnClickFilter('all')}>
                        All
                    </a>
                </li>
                <li>
                    <a className={filter === 'active' ? 'selected' : ''}
                       onClick={() => handleOnClickFilter('active')}>
                        Active
                    </a>
                </li>
                <li>
                    <a className={filter === 'completed' ? 'selected' : ''}
                       onClick={() => handleOnClickFilter('completed')}>
                        Completed
                    </a>
                </li>
            </ul>

            <button className="clear-completed" onClick={clearCompletedTodos}>
                Clear completed
            </button>
        </footer>
    );
}

export default Footer;
