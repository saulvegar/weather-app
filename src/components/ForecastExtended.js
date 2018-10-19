import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

//http://api.openweathermap.org/data/2.5/forecast?q=Buenos Aires,ar&appid=aaaa6920dafa78fe16078b48435eee45

const renderForecasteItemDays = forecastData => {
    return forecastData.map(forecast => (
        <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}
        />
    ));
}

const renderProgress = () => {
    return <h3>Cargando Pronóstico extendido...</h3>;
}

const ForecastExtended = ({city, forecastData}) => (
    <div> 
        <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
        {
            forecastData ? renderForecasteItemDays(forecastData) 
            : renderProgress()
        }
    </div> 
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}
 
export default ForecastExtended;