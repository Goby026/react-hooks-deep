import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/css/skeleton.css';
import './assets/css/normalize.css';
import './styles.css';

import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { HooksApp } from './HooksApp.jsx';
// import { CounterApp } from './01-useState/CounterApp.jsx';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx';
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SimpleForm /> */}
    <FormWithCustomHook/>
  </StrictMode>,
)
