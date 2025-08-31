import { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "../api/weather";
import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import BottomNav from "../components/BottomNav";
import WeatherConditionCard from "../components/WeatherConditionCard";

const Dashboard = () => {
  const [city, setCity] = useState("Nairobi");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  // const weatherData = [
  //   { day: "Thursday", temp: 30, icon: "☀️" },
  //   { day: "Friday", temp: 20, icon: "🌧️" },
  //   { day: "Saturday", temp: 17, icon: "🌩️" },
  //   { day: "Sunday", temp: 15, icon: "🌨️" },
  //   { day: "Monday", temp: 32, icon: "☀️" },
  //   { day: "Tuesday", temp: 24, icon: "🌤️" },
  //   { day: "Wednesday", temp: 26, icon: "☀️" },
  // ];

  const weatherCondition = [
    { Icon: "🌡", heading: "Temperature", val: "76°C" },
    { Icon: "💧", heading: "Humidity", val: "32%" },
    { Icon: "💨", heading: "Wind", val: "7.6 km/h" },
    { Icon: "🌦️", heading: "Weather Condition", val: 76 },
  ];

  const fetchWeatherData = async () => {
    try {
      setError(null);
      const current = await getCurrentWeather(city);
      const forecastData = await getForecast(city);

      setWeather(current);
      setForecast(forecastData.list.slice(0, 7)); // get next 7 entries
    } catch (err) {
      setError("Failed to fetch weather data");
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  return (
    <>
      <Navbar className="w-12/12" />
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : weather ? (
        <div className="min-h-screen bg-neutral-300 pb-16 -z-20">
          <div className="px-4 py-4 lg:w-9/12 lg:mx-auto">
            <div className="mt-20 text-center">
              <h2 className="text-xl font-bold mb-1">Nairobi</h2>
              <p className="font- mb-4">Wednesday, Aug 20 2025</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6 bg-blue-100 p-4 rounded-2xl">
              {weatherCondition.map((c, i) => (
                <WeatherConditionCard
                  key={i}
                  Icon={c.Icon}
                  heading={c.heading}
                  val={c.val}
                />
              ))}
            </div>
            <h3 className="font-bold mb-2">7-day Weather Forecast</h3>
            {forecast.map((item, index) => (
              <WeatherCard key={index} data={item} />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <BottomNav />
    </>
  );
};

export default Dashboard;
