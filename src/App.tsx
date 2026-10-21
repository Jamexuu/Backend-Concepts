import { ThemeProvider } from '@/context/ThemeContext'
import { AppRoutes } from '@/routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
