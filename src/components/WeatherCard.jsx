const WeatherCard = ({data}) => {
  const date = new Date(data.dt_txt)
  return (
    <div className="bg-blue-50 text-black rounded-lg mb-4 p-4 flex items-center justify-between w-12/12">
      <div>
        <p className="text-sm font-bold">{date.toDateString()}</p>
      </div>
      <p className="text-lg font-bold">{Math.round(data.main.temp)}°C</p>
      <span className="material-icons text-blue-400 mb-2">{data.weather[0].main}</span>
    </div>
  );
};

export default WeatherCard;
