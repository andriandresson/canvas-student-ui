import React, { Component } from 'react';
import {ThemeProvider} from 'styled-components';
import Theme from './utilities/theme';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Dashboard {...this.props}/>          
      </ThemeProvider>
    );
  }
}

export default App;
