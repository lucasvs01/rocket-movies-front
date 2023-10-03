import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'
import Globalstyles from './Styles/global'
import { Details } from './Pages/Details'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <Globalstyles/>    
        <Details>
        </Details>
    </ThemeProvider>
  
  </React.StrictMode>,
)
