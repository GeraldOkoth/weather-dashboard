import { useEffect, useState, useCallback } from "react";
import { getCurrentWeather, getForecast } from "../api/weather";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import ErrorMessage from "./ErrorMessage"
import WeatherCard from "../components/WeatherCard";
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

  // Handle search from Navbar
  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <>
      <Navbar city={city} setCity={setCity} onSearch={handleSearch} />
      <div className="mt-8 p-6 bg-gray-200 min-h-screen">
        {error ? (
          <ErrorMessage />
        ) : weather ? (
          <div className="lg:max-w-2xl mx-auto">
            {weather && (
              <div className="text-center m-6">
                <h2 className="text-2xl font-bold">{weather.name}</h2>
                <p className="text-gray-600">{getCurrentDate()}</p>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4 mt-4 bg-neutral-100 shadow p-6 rounded-2xl">
              <div className="bg-black text-white p-4 rounded-2xl">
                <FaTemperatureHigh /> Temperature: {Math.round(weather.main.temp)}°C
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
                <WeatherCard key={index} data={item} />
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
