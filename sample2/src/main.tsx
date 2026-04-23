import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const element = (
  <div className="container"> 
    <label htmlFor="name">Name: </label>
    <input id="name" type="text" />
  </div>
);

createRoot(document.getElementById('root')!).render(
 <App />
)
