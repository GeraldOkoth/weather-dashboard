import { useEffect, useState, useCallback } from "react";
import { getCurrentWeather, getForecast } from "../api/weather";
import ForecastItem from "../components/ForecastItem";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { FaCloud, FaTemperatureHigh, FaWater, FaWind } from "react-icons/fa";

const Dashboard = () => {
  const [city, setCity] = useState("Nairobi");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  const fetchWeatherData = useCallback(async () => {
    try {
      setError(null);
      const current = await getCurrentWeather(city);
      const forecastData = await getForecast(city);

      setWeather(current);

      const dailyForecast = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(dailyForecast.slice(0, 7));
    } catch (err) {
      setError(err.message || "Failed to fetch weather data");
    }
  }, [city]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  // Get current full date
  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Navbar city={city} setCity={setCity} />
      <div className="p-6 bg-gray-200 min-h-screen">
        {weather && (
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">{weather.name}</h2>
            <p className="text-gray-600">{getCurrentDate()}</p>
          </div>
        )}

        {error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : weather ? (
          <div className="lg:max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-4 mt-4 bg-neutral-100 shadow p-6 rounded-2xl">
              <div className="bg-black text-white p-4 rounded-2xl">
                <FaTemperatureHigh /> Temp: {Math.round(weather.main.temp)}°C
              </div>
              <div className="bg-black text-white p-4 rounded-2xl">
                <FaWater /> Humidity: {weather.main.humidity}%
              </div>
              <div className="bg-black text-white p-4 rounded-2xl">
                <FaWind /> Wind: {(weather.wind.speed * 3.6).toFixed(1)} km/h
              </div>
              <div className="bg-black text-white p-4 rounded-2xl">
                <FaCloud className="text-white inline-block mr-2" />
                {weather.weather[0].description}
              </div>
            </div>

            <h3 className="mt-6 font-bold text-center">7-Day Forecast</h3>
            <div className="mt-4 space-y-2 rounded-2xl">
              {forecast.map((item, index) => (
                <ForecastItem key={index} data={item} />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center">Loading weather...</p>
        )}
      </div>
      <BottomNav />
    </>
  );
};

export default Dashboard;
