// SpeakerCard.js
import React from 'react';

const SpeakerCard = ({ speaker, onClick }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={() => onClick(speaker)}
    >
      <img
        src={speaker.image}
        alt={`${speaker.name}'s photo`}
        className="w-24 h-24 mx-auto rounded-full object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold">{speaker.name}</h3>
      <p className="text-gray-500">{speaker.title}</p>
      <p className="text-gray-400 text-sm">{speaker.company}</p>
    </div>
  );
};

export default SpeakerCard;
