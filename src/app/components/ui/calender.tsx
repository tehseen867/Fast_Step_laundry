import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface CalendarProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selected, onSelect }) => {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      className="border rounded-md p-2"
    />
  );
};

export default Calendar;