import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'
import Globalstyles from './Styles/global'
import { Routes } from './Routes'
import { AuthProvider } from './hooks/auth'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <Globalstyles/>
        <AuthProvider>
          <Routes>
          </Routes>
        </AuthProvider>   
    </ThemeProvider>
  
  </React.StrictMode>,
)
