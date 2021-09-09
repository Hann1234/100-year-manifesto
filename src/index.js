import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';

//material.ui imports:
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';
import cyan from '@material-ui/core/colors/cyan';

//material.ui theme const:
const theme = createTheme({
  palette: {
    primary: {
      main: grey[300],
    },
    secondary: {
      main: cyan[300],
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <App />
  </Provider>
  </ThemeProvider>,
  document.getElementById('react-root'),
);
