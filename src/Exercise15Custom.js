import { useState } from 'react';

const useCustomForm = (initialValues, validate, onSubmit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = validate(values);
        if (Object.keys(newErrors).length === 0) {
            await onSubmit(values);
            setValues(initialValues);
        } else {
            setErrors(newErrors);
        }
    };

    return { values, errors, handleChange, handleSubmit };
};

export default useCustomForm;
