import React from 'react';
import withBackgroundColor from './Exercise14Color';
import BaseComponent from './Exercise14';

const EnhancedComponent = withBackgroundColor(BaseComponent, 'lightblue');

export default EnhancedComponent;
