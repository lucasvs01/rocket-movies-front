import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'
import Globalstyles from './Styles/global'
import { Routes } from './Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <Globalstyles/>    
        <Routes>
        </Routes>
    </ThemeProvider>
  
  </React.StrictMode>,
)
