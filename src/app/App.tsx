import { classNames } from 'helpers/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { Route, Routes } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss'


const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={() => toggleTheme()}>Toggle</button>
      <h1>gbndbd</h1>
      <Routes>
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App