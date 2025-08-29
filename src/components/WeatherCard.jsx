const WeatherCard = ({ day, temp, icon }) => {
  return (
    <div className="bg-blue-50 text-black rounded-lg mb-4 p-4 flex items-center justify-between w-12/12">
      <div >
        <p className="text-sm font-bold">{day}</p>
        <span>Aug</span>
      </div>
      <p className="text-lg font-bold">{temp}</p>
      <span className="material-icons text-blue-400 mb-2">{icon}</span>
    </div>
  );
};

export default WeatherCard;
