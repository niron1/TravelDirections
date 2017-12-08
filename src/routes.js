import React from 'react';
import {Route, IndexRoute} from 'react-router'

import app from './components/App'
import HomeContainer from './containers/Home'

 export default (
   <div>
    <Route path="/" component={app}>
      <IndexRoute component={HomeContainer} />
    </Route>
   </div>
)