import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import About from './containers/About'
import Projects from './containers/Projects'
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'

function App() {
  const [isUsingDarkTheme, setisUsingDarkTheme] = useState(false)

  function themeChanger() {
    setisUsingDarkTheme(!isUsingDarkTheme)
  }

  return (
    <ThemeProvider theme={isUsingDarkTheme ? DarkTheme : LightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar themeChanger={themeChanger} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
