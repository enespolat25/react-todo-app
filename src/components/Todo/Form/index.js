import React, {useEffect, useState} from 'react';

const initialFormValues = {text: '', isCompleted: false};

function Form({todos, setTodos}) {

    const [form, setForm] = useState(initialFormValues);

    // reset form
    useEffect(() => {
        setForm(initialFormValues);
    }, [todos]);

    const handleOnChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (form.text === '') {
            return false;
        }

        setTodos([...todos, form]);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                name="text"
                value={form.text}
                onChange={handleOnChangeInput}
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
            />
        </form>
    );
}

export default Form;
