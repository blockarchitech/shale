import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PFDinDisplayProLightWebfont';
    src: url('/fonts/PFDinDisplayPro-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-variant:normal;
  }

  @font-face {
    font-family: 'PTSansRegularWebfont';
    src: url('/fonts/PTSans-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-variant:normal;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *:focus {
    outline-width: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.lightGray};
    margin-bottom: 15px;
    font-size: 1.2em;
    line-height: 1.4em;
    user-select: none;
  }

  body, select, input[type=text], input[type=time], input[type=date] {
    font-family: ${({ theme }) => theme.fonts.main};
    font-weight: normal;
  }

  select, input[type=time], input[type=date] {
    appearance: none;
    border: none;
    position: absolute;
    top: 13px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1em;
    line-height: 1em;
    background-color: ${({ theme }) => theme.colors.lighterGray};
  }

  input[type=date] {
    direction: rtl;
  }

  select {
    right: 30px;
    top: 14px;
  }

  input[type=time] {
    right: 10px !important;
  }

  input[type=date] {
    right: 10px !important;
  }
`;
