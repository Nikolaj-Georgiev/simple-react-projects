import { useState } from 'react';
import DateList from './DateList';
import MatchList from './MatchList';

export default function StageDetails({ stage, onBack }) {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className='stage-details'>
      {!selectedDate ? (
        <DateList
          stage={stage}
          onSelectDate={setSelectedDate}
          onBack={onBack}
        />
      ) : (
        <MatchList
          stage={stage}
          selectedDate={selectedDate}
          onBack={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
}
