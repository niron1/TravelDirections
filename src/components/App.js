import React, { Component } from 'react';
import logo from './logo.svg';
import * as styles from './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        
        <Grid>
          <Row center="xs">
            <Col>
              <div className={styles.App}>
                <header className={styles.Appheader}>
                  <img src={logo} className={styles.Applogo} alt="logo" />
                  <h1 className={styles.Apptitle}>Travel directions app</h1>
                </header>
                <p className={styles.Appintro}>
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
