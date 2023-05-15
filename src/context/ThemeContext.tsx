import React, { createContext, useReducer } from 'react';

export enum Action {
  SET_DARK = 'SET_DARK',
  SET_LIGHT = 'SET_LIGHT',
};

export type State = {
  theme: 'light' | 'dark';
};

export const ThemeContext = createContext<{
  state: State,
  dispatch: React.Dispatch<Action>,
}>({
  state: {
    theme: 'light'
  },
  dispatch: () => {},
});

const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({ children }): React.ReactElement => {
  const [state, dispatch] = useReducer((state: State, action: Action ): State => {
    switch (action) {
      case Action.SET_DARK:
        return {
          theme: 'dark',
        };
        case Action.SET_LIGHT:
          return {
            theme: 'light',
          };
      default:
        return state;
    }
  }, { theme: 'light' });

  return (
    <ThemeContext.Provider value={{
      state,
      dispatch,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
