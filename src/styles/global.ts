import { createGlobalStyle } from 'styled-components';
import '@theme-toggles/react/css/classic.css';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    transition-property: background-color,border-color,color,fill,stroke;
    transition-duration: .15s;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${props => props.theme.text};
  }

  svg {
    font-size: 30px;
    color: ${props => props.theme.background};
  }
`;
