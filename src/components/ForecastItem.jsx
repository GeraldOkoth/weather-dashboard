const ForecastItem = ({ day, date, temp, icon }) => {
  return (
    <div className="flex justify-between bg-blue-50 items-center py-2 border-b">
      <div>
        <p className="font-medium">{day}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-bold">{temp}°C</p>
        <span className="material-icons">{icon}</span>
      </div>
    </div>
  );
}

export default ForecastItem