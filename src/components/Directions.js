import React from 'react';
import * as styles from './Directions.scss';

export const Directions = ({data,weather}) => (
    <div>
        <h1>Weather</h1>
        {weather!=null && weather.data && weather.data.main && weather.data.main.temp}
        <h1>Directions</h1>
        {data.steps.map( (step,index) => (<div key={index} className={styles.directionsWrapper}>{index+1}.&nbsp;<div className={styles.directionsItem} dangerouslySetInnerHTML={{__html: step.html_instructions}}></div></div>) )}
    </div>
  
  );
