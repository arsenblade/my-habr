import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { Route, Routes } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss'
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';


const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <h1>gbndbd</h1>
      <AppRouter />
    </div>
  )
}

export default App