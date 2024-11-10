import React, { useState, useEffect } from 'react';
import SpeakerCard from './SpeakerCard';
import SpeakerDetails from './SpeakerDetails';

const SpeakerSlider = ({ speakers }) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2);

  // Set the number of items to show based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // large screens (lg)
        setItemsToShow(4);
      } else if (window.innerWidth >= 768) { // medium screens (md)
        setItemsToShow(3);
      } else { // small screens (sm)
        setItemsToShow(2);
      }
    };

    // Initialize itemsToShow based on initial screen size
    handleResize();

    // Update itemsToShow on window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  const handleClose = () => {
    setSelectedSpeaker(null);
  };

  const handleNext = () => {
    if (currentIndex < speakers.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-4">View our Featured Speakers for the Event</h2>
      <p className="text-gray-600 text-center mb-12">Speakers are core contributors and industry thought leaders working at <span className='text-blue-600'>companies</span> that push for innovations</p>
      
      {/* Display selected speaker details */}
      {selectedSpeaker && (
        <SpeakerDetails speaker={selectedSpeaker} onClose={handleClose} />
      )}

      <div className="relative flex items-center justify-center">
        {/* Previous button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-gray-300 text-gray-500 size-8 rounded-full disabled:opacity-50"
        >
          ←
        </button>

        {/* Speaker cards slider */}
        <div className="flex gap-4 overflow-hidden py-4">
          {speakers.slice(currentIndex, currentIndex + itemsToShow).map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} onClick={() => handleCardClick(speaker)} />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= speakers.length - itemsToShow}
          className="bg-gray-300 text-gray-500 size-8 rounded-full disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default SpeakerSlider;
