import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../styles/theme";
import { useState, useEffect } from 'react';

interface Props {
    children: React.ReactNode;
}

const Provider= ({ children }: Props) => {
    const { value } = useDarkMode(false, { storageKey: undefined })
  const theme = value ? darkTheme : lightTheme

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
    
  const body = 
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>

  if (!mounted) {
      return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body
};

export default Provider
