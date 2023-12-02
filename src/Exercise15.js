import React from 'react';
import useCustomForm from './Exercise15Custom';

const initialValues = {
    username: '',
    email: ''
};

const MyFormComponent = () => {
    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Username is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        }
        // Additional validation rules...
        return errors;
    };

    const onSubmit = async (values) => {
        // Submit form values to backend or handle them as needed
        console.log('Form Submitted!', values);
    };

    const { values, errors, handleChange, handleSubmit } = useCustomForm(initialValues, validate, onSubmit);

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Username"
            />
            {errors.username && <p>{errors.username}</p>}
            
            <input
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
            />
            {errors.email && <p>{errors.email}</p>}

            <button type="submit">Submit</button>
        </form>
    );
};

export default MyFormComponent;
