import React from 'react';
import { render } from 'react-dom';

const template = React.createElement('p', {}, 'React Element');
render(template, document.getElementById('app'))