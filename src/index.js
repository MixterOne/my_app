import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { purple, red } from '@material-ui/core/colors';

import App from './App';
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary:{
      main: purple[500],
    } 
  },
  secondary:{
    main: red[700],
  },
});

 ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

