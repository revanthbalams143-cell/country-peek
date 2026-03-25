import { createContext, useState, useEffect, useContext } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.removeAttribute('data-theme')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

