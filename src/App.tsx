import React, { useContext, useState } from 'react'
import { classNames } from './helpers/classNames/classNames';
import './styles/index.scss'
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={() => toggleTheme()}>Toggle</button>
      <h1>gbndbd</h1>
    </div>
  )
}

export default App