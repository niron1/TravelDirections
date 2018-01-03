import React from 'react';
import * as styles from './Directions.scss';
import RaisedButton from 'material-ui/RaisedButton';
import ReactWeatherDisplay from 'react-weather-display';


const calcCurrentCondition = (temp) => {
  if (temp<-20) return 'snowy';
  else
  if (temp>=-20 && temp<-10) return 'stormy';
  else
  if (temp>=-10 && temp<10) return 'rainy';
  else
  if (temp>=10 && temp<20) return 'cloudy';
  else
  return 'sunny';
}

const GetSpinner = () => (<div className={styles.glowwormLoader}>
  <div className={styles.glowwormMotion}>
    <div className={styles.glowwormContainer}>
      <div className={styles.glowwormLeft}></div>
      <div className={styles.glowwormRight}></div>
    </div>
  </div>
</div>);

export const Directions = ({data,weather,handleBackToMain,spinner,error,errorMessage}) => (
    <div>

        { spinner ? GetSpinner() : null}
        {error ?(<div>No results</div>):
          (<div>
            <h1>Weather {weather!=null?"in "+weather.data.name:null}</h1>
            <div className={styles.weatherWrapper}>
              {weather!=null?
                ( <ReactWeatherDisplay currentCondition={calcCurrentCondition(weather.data.main.temp)} currentTemperature={weather.data.main.temp} width={200} height={100} />)
                : 'Loading...'}
            </div>

            {data!=null && data.steps?[
              (<h1>Directions</h1>),
                data.steps.map( (step,index) =>
                  (<div key={index} className={styles.directionsWrapper}>
                    <div className={styles.directionsItem} dangerouslySetInnerHTML={{__html: (index+1)+'.&nbsp'+step.html_instructions}}>
                    </div>
                  </div>)
                  )
                ]:null}
              </div>
            )
        }
        <RaisedButton onClick={handleBackToMain} label="Back" primary={true}  />
    </div>

  );
