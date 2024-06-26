import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default/theme'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}
