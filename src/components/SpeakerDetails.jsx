// SpeakerDetails.js
import React from 'react';

const SpeakerDetails = ({ speaker, onClose }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mx-auto relative">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        onClick={onClose}
      >
        ×
      </button>
      <div className="flex items-center gap-4">
        <img
          src={speaker.image}
          alt={`${speaker.name}'s photo`}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg md:text-xl font-bold">{speaker.name}</h2>
          <p className="text-gray-500">{speaker.title}</p>
          <p className="text-gray-400 text-sm">{speaker.company}</p>
        </div>
        <div className="border-l border-gray-600/60 h-24 "></div>
        <p className="mt-4 text-gray-700">{speaker.bio}</p>
      </div>
      
    </div>
  );
};

export default SpeakerDetails;
