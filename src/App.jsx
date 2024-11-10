// App.js
import React from 'react';
import SpeakerSlider from './components/SpeakerSlider';

const speakersData = [
  { id: 1, name: 'John Doe', title: 'Chief Marketing Officer', company: 'Acme Corp', bio: 'Synergize business communities...', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jane Smith', title: 'Chief Engagement Officer', company: 'Acquia', bio: 'Unleash cross-platform best practices...', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Jim Brown', title: 'Chief Technical Developer', company: 'Pantheon', bio: 'Monetize parallel infomediaries...', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Linda Green', title: 'Chief Marketing Officer', company: 'Specbee', bio: 'Pursue real-time markets...', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Max Rune', title: 'Chief Executive Officer', company: 'Zero', bio: 'Stand at the peak...', image: 'https://via.placeholder.com/150' },
];

function App() {
  return (
    <div className="App">
      <SpeakerSlider speakers={speakersData} />
    </div>
  );
}

export default App;
