import { Classic } from '@theme-toggles/react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import ThemeContextProvider, { Action, ThemeContext } from './context/ThemeContext';

import * as theme from './styles/theme';

const Header = styled.header`
  height: 50px;
  padding: 10px;

  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;

  background-color: ${(props) => props.theme.text};
`;

const Main = styled.main`
  padding: 10px;
`;

function App() {
  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {(ctx) => {
          const isLight = ctx.state.theme === 'light';

          return (
            <ThemeProvider theme={theme[ctx.state.theme]}>
              <GlobalStyles />
              <Header>
                <Classic toggled={isLight} toggle={() => ctx.dispatch(isLight ? Action.SET_DARK : Action.SET_LIGHT)} />
              </Header>

              <Main>
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio voluptatibus error amet libero unde sed provident nobis dignissimos. Tempora ipsum expedita assumenda recusandae hic iste enim pariatur ducimus possimus!</p>
              </Main>
            </ThemeProvider>
          );
        }}
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
};

export default App;
