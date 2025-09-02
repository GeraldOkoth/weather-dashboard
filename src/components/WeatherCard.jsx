import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

const WeatherCard = ({ data }) => {
  const date = new Date(data.dt_txt);

  // Map weather conditions to icons
  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return <WiDaySunny className="text-yellow-500 text-2xl" />;
      case "Clouds":
        return <WiCloudy className="text-gray-500 text-2xl" />;
      case "Rain":
        return <WiRain className="text-blue-500 text-2xl" />;
      case "Thunderstorm":
        return <WiThunderstorm className="text-purple-600 text-2xl" />;
      case "Snow":
        return <WiSnow className="text-cyan-400 text-2xl" />;
      case "Mist":
      case "Fog":
        return <WiFog className="text-gray-400 text-2xl" />;
      default:
        return <WiDaySunny className="text-yellow-500 text-2xl" />;
    }
  };

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow-md">
      <span>{date.toDateString()}</span>
      <span className="font-bold">{Math.round(data.main.temp)}°C</span>
      {getWeatherIcon(data.weather[0].main)}
    </div>
  );
};

export default WeatherCard;
