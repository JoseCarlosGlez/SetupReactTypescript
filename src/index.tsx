import React from 'react';
import { render } from 'react-dom';

import './SASS/style.scss';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './../node_modules/jquery/dist/jquery.min.js'
import './../node_modules/popper.js/dist/umd/popper.min.js'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'



import App from './components/App';






const ROOT = document.getElementById('container');

render(<App></App>, ROOT);
