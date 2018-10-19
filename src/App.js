import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogotá,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Santiago,cl',
];

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities} />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">  
                  <ForecastExtendedContainer />
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;