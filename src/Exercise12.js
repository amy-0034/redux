import React, { useContext } from 'react';
import { DataContext } from './Exercise12Context';

const ChildComponent = () => {
    const { data, updateData } = useContext(DataContext);

    return (
        <div>
            <p>Data in Child: {data}</p>
            <button onClick={() => updateData("Updated Data")}>Update Data</button>
        </div>
    );
};

export default ChildComponent;
