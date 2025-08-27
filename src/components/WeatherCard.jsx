const WeatherCard = ({ title, value, icon }) => {
  return (
    <div className="bg-black text-white rounded-lg p-4 flex flex-col items-center justify-center w-32">
      <span className="material-icons text-blue-400 mb-2">{icon}</span>
      <p className="text-sm">{title}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
}

export default WeatherCard
