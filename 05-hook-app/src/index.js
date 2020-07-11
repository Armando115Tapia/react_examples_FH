import React from 'react';
import ReactDOM from 'react-dom';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHooks } from './components/02-useEffect/FormWithCustomHooks';
// import HookApp from './HookApp';
// import CounterApp from './components/01-useState/CounterApp';
ReactDOM.render(<FormWithCustomHooks />, document.getElementById('root'));
