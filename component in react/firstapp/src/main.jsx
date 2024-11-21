import './index.css'
import App from './App.jsx'
// default import 
// import Devanshu from './Devanshu.jsx'
// named import 
// 
// import { Devanshu } from './Devanshu.jsx';
import { Devanshu as Programmer } from './Devanshu.jsx';
// import ReactDOM from 'react-dom/client'
import ReactDOM,* as Hello from 'react-dom/client'

// let root=ReactDOM.createRoot(document.getElementById('root'));
let root=Hello.createRoot(document.getElementById('root'));
root.render(<Programmer/>);