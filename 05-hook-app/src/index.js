import React from 'react';
import ReactDOM from 'react-dom';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHooks } from './components/02-useEffect/FormWithCustomHooks';
import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import HookApp from './HookApp';
// import CounterApp from './components/01-useState/CounterApp';
ReactDOM.render(<RealExampleRef />, document.getElementById('root'));
