import { StrictMode } from 'react'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from './components/thems/default.js';
import { createRoot } from 'react-dom/client'
import App from './components/app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
