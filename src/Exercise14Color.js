import React from 'react';

const withBackgroundColor = (WrappedComponent, backgroundColor) => {
    return (props) => {
        const style = { backgroundColor };
        return (
            <div style={style}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withBackgroundColor;
