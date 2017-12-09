import React from 'react';
import TextField from 'material-ui/TextField'
import {connect} from 'react-redux';
import Script from 'react-load-script';
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'
import * as styles from './Home.scss';
import * as actionCreators from '../actions';

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

    return (<div>
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
            hintText="Address"
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

            <br />

            <TextField
            className="destination-field"
            hintText="Password"
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

          </form>
      </div>)
    }
}

const mapDispatchToProps = (dispatch) => ({
  handleChangeSource: (value)=>dispatch(actionCreators.changeSource(value)),
  handleChangeDestination: (value)=>dispatch(actionCreators.changeDestination(value)),
});

const mapStateToProps = (state) => ({
  googleAPIKey:state.mapReducer.googleAPIKey,
  sourceAddress:state.mapReducer.sourceAddress,
  destinationAddress:state.mapReducer.destinationAddress,
})

const statefulHomescreen = connect(mapStateToProps,mapDispatchToProps)(HomeScreen); 

export default statefulHomescreen;