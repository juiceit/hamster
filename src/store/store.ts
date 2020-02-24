import { createStore } from 'redux';

import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";
import { Theme } from '../themes/theme';

interface Action {
  type: string,
  payload: any,
}

interface StoreTheme {
  name: string;
  theme: Theme;
}

function theme(state: StoreTheme = {name: 'light', theme: lightTheme}, action: Action) {
  switch (action.type) {
    case 'THEME_CHANGE':
      const { name } = action.payload;
      switch (name) {
        case 'light':
          return {name: 'light', theme: lightTheme};
        case 'dark':
          return {name: 'dark', theme: darkTheme};
      }
    default:
      return state;
  }
}

export default createStore(theme);
