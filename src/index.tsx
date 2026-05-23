import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import UserContextProvider from './components/context/user-context'
import LoginContextProvider from './components/context/login-context'
import AllFunctionContextProvider from './components/context/allFunctions-context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <LoginContextProvider>
        <AllFunctionContextProvider>
          <App />
        </AllFunctionContextProvider>
      </LoginContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)

reportWebVitals()
