import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css'
import App from '../src/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router basename="/portfolio_init">
          <App />
      </Router>
  </StrictMode>,
)

