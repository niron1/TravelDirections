import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import Script from 'react-load-script';
import PlacesAutocomplete from 'react-places-autocomplete'
import * as styles from './Home.scss';
import * as actionCreators from '../actions';
import {GetDirections} from '../api';
import {Directions} from '../components/Directions';

class HomeScreen extends React.Component  {

  isGoogleLoaded = false;

  constructor(props) {
    super(props);
    this.state = {  isGoogleLoaded:false }
  }

  handleGoogleLoaded() {
    this.setState({isGoogleLoaded:true})
  }

  render() { 
    const sourceInputProps = {
      value: this.props.sourceAddress,
      onChange: (sourceAddress) => this.props.handleChangeSource(sourceAddress),

    }


    const destinationInputProps = {
      value: this.props.destinationAddress,
      onChange: (destinationAddress) => this.props.handleChangeDestination(destinationAddress),
    }

    const cssClasses = {
      autocompleteItemActive: 'autocompleteItemActive',
      autocompleteItem:       'autocompleteItem',
    }
    if (this.props.directions == null )
      return (<div>
          <p className={styles.Appintro}>
            Type source and destination addresses to get travel directions
          </p>

          <form>
            <Script
              url={`https://maps.googleapis.com/maps/api/js?key=${this.props.googleAPIKey}&libraries=places`}
              onLoad={ this.handleGoogleLoaded.bind(this) }
            />

           <TextField
            hintText="Google api key"
            fullWidth={true}
            value={this.props.googleAPIKey}
            floatingLabelText="Google api key"
            name="google-api-key"
            label="google-api-key"
            disabled={true}
             />
            <br />

            <TextField
            className="source-field"
            fullWidth={true}
            floatingLabelText="Enter Source"
            name="source"
            label="source"
            disabled={true}
             />

            <div className={styles.autoCompleteParent}>
              {this.state.isGoogleLoaded?(
              <PlacesAutocomplete       
                classNames={cssClasses}
                inputProps={sourceInputProps} />):null}
            </div>

            <TextField
            className="destination-field"
            fullWidth={true}
            floatingLabelText="Enter Destination"
            type="text"
            name="destination"
            label="destination"
            disabled={true}
            />

            <div className={styles.autoCompleteParent}>
              {this.state.isGoogleLoaded?(
              <PlacesAutocomplete       
                classNames={cssClasses}
                inputProps={destinationInputProps} />):null}
            </div>
            <br/>

            <RaisedButton label="Get Directions" primary={true} 
              onClick={ ()=>this.props.handleGetDirections(this.props.googleAPIKey, this.props.sourceAddress,this.props.destinationAddress, this.props.weatherAPIKey) }/>

          </form>
      </div>)
      else 
        return (<Directions weather={this.props.weather} data={this.props.directions.data.routes[0].legs[0]}/>);
    }
}

const mapDispatchToProps = (dispatch) => ({
  handleChangeSource: (value)=>dispatch(actionCreators.changeSource(value)),
  handleChangeDestination: (value)=>dispatch(actionCreators.changeDestination(value)),
  handleGetDirections: (...args)=>dispatch(GetDirections(...args) ),
});

const mapStateToProps = (state) => ({
  googleAPIKey:state.mapReducer.googleAPIKey,
  weatherAPIKey: state.mapReducer.weatherAPIKey,
  sourceAddress:state.mapReducer.sourceAddress,
  destinationAddress:state.mapReducer.destinationAddress,
  directions:state.mapReducer.directions,
  weather:state.mapReducer.weather,
})

const statefulHomescreen = connect(mapStateToProps,mapDispatchToProps)(HomeScreen); 

export default statefulHomescreen;