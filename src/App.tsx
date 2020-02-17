import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import store from './store/store';

import ThemeToggler from './components/Toggler';
import Button from './components/Button';

import './App.css';

const App = () => {
  const [theme, setTheme] = useState(store.getState().theme);

  store.subscribe(() => setTheme(store.getState().theme));

  function handleThemeToggled(dark: boolean) {
    console.log("handleThemeToggled");
    if(dark) {
      console.log("dark");
      store.dispatch({ type: 'dark' });
    }
    else {
      console.log("light");
      store.dispatch({ type: 'light' });
    }
  }

  return (<ThemeProvider theme={theme}>
    <div className="App">
      <ThemeToggler onToggle={handleThemeToggled} checked={store.getState().name === 'dark'} />
      <Button onClick={() => handleThemeToggled(store.getState().name === 'light')}>Click me</Button>
    </div>
  </ThemeProvider>);
}

export default App;
