import React from 'react'

const WeatherConditionCard = ({ Icon, heading, val }) => {
  return (
    <div className="bg-black text-white p-4 rounded-lg">
      <span className="material-icons text-blue-400 mb-2">{Icon}</span>
      <p className="text-sm">{heading}</p>
      <p className="text-lg font-bold">{val}</p>
    </div>
  );
};

export default WeatherConditionCard