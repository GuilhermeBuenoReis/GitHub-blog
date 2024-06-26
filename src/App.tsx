import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default/theme'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Olá mundo</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}
