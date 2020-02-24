import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import store from './store/store';

import ThemeToggler from './components/Toggler';
import Button from './components/Button';

import './App.css';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.background};
`;

const App = () => {
  const [theme, setTheme] = useState(store.getState().theme);

  store.subscribe(() => setTheme(store.getState().theme));

  function handleThemeToggled(dark: boolean) {
    if(dark) {
      store.dispatch({ type: 'THEME_CHANGE', payload: { name: 'dark' } });
    }
    else {
      store.dispatch({ type: 'THEME_CHANGE', payload: { name: 'light' } });
    }
  }

  return (<ThemeProvider theme={theme}>
    <Container>
      <Button onClick={() => handleThemeToggled(store.getState().name === 'light')}>Click me</Button>
      <ThemeToggler onToggle={handleThemeToggled} checked={store.getState().name === 'dark'} />
      <Button onClick={() => handleThemeToggled(store.getState().name === 'light')}>Click me</Button>
    </Container>
  </ThemeProvider>);
}

export default App;
