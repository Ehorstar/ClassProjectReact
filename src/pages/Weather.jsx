import { useLoaderData } from "react-router-dom";
import SearchWeather from "../components/search/SearchWeather";

const Weather = () => {
  const weather = useLoaderData();

  if (!weather) {
    return (
      <div className="weather">
        <h1>Місто не знайдено</h1>
        <SearchWeather />
        <p>Спробуйте ввести іншу назву міста</p>
      </div>
    );
  }

  return (
    <div className="weather">
      <h1>Погода в {weather.name}</h1>
      <SearchWeather />
      <div className="weather-main">
        <div className="temperature">
          🌡️ Температура: {Math.round(weather.main.temp)}°C
        </div>
        <div className="feels-like">
          Відчувається як: {Math.round(weather.main.feels_like)}°C
        </div>
        <div className="details">
          <div>💧 Вологість: {weather.main.humidity}%</div>
          <div>🌬️ Вітер: {weather.wind.speed} м/с</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
