import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider,useTheme} from './Ex_UseContext'
import Counter from './Ex_UseState_UseEffect'
function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Switch theme</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className='wholePage'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1>Vite + React - Examples</h1>        
      <ThemeSwitcher />
      <Counter />
      </div>
    </ThemeProvider>
  )
}

export default App
