import React from 'react';
import TextField from 'material-ui/TextField'
import {connect} from 'react-redux';

const HomeScreen = ({googleAPIKey}) => (<div>
          <form>

           <TextField
            className="google-api-key"
            hintText="Address"
            fullWidth={true}
            value={googleAPIKey}
            floatingLabelText="Google api key"
            name="google-api-key"
            label="google-api-key"
             />
            <br />


            <TextField
            className="source-field"
            hintText="Address"
            fullWidth={true}
            floatingLabelText="Enter Source"
            name="source"
            label="source"
             />
            <br />

            <TextField
            className="destination-field"
            hintText="Password"
            fullWidth={true}
            floatingLabelText="Enter Destination"
            type="text"
            name="destination"
            label="destination"
            
            />
          </form>
  </div>)

  const mapDispatchToProps = {}
  const mapStateToProps = (state) => ({
    googleAPIKey:state.mapReducer.googleAPIKey
  })

  export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)