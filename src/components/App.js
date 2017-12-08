import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        
        <Grid>
          <Row center="xs">
            <Col>
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Travel directions app</h1>
                </header>
                <p className="App-intro">
                  Type source and destination addresses to get travel directions
                </p>
                {this.props.children}
              </div>          
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>

    );
  }
}

export default App;
