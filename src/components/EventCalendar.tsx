import { useState } from 'react';

interface EventData {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
  duration: string;
  location: string;
  description: string;
  price: {
    individual: string;
    corporate: string;
  };
  seats?: string;
  type: 'course' | 'workshop' | 'event';
}

interface EventCalendarProps {
  events: EventData[];
  year: number;
}

export function EventCalendar({ events, year }: EventCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const getEventsForDate = (date: Date) => {
    // Exclude events scheduled in 2025 (promo events to remove)
    const filtered = events.filter(event => {
      const eventDate = new Date(event.date);
      const endDate = event.endDate ? new Date(event.endDate) : eventDate;

      // Skip if any part of the event falls in 2025
      if (eventDate.getFullYear() === 2025 || endDate.getFullYear() === 2025) return false;

      return date >= new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()) &&
             date <= new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    });

    return filtered;
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, year);
    const firstDay = getFirstDayOfMonth(currentMonth, year);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200 bg-gray-50" />);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, currentMonth, day);
      const dayEvents = getEventsForDate(date);
      const isToday = new Date().toDateString() === date.toDateString();

      days.push(
        <div
          key={day}
          className={`h-24 border border-gray-200 p-1 overflow-hidden hover:bg-gray-50 transition-colors ${
            isToday ? 'bg-blue-50 border-blue-300' : 'bg-white'
          }`}
        >
          <div className={`text-sm mb-1 ${isToday ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map((event, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedEvent(event)}
                className="w-full text-left"
              >
                <div className={`text-xs px-1 py-0.5 rounded truncate ${
                  event.type === 'course' ? 'bg-[#f57c00] text-white' :
                  event.type === 'workshop' ? 'bg-[#005a7c] text-white' :
                  'bg-green-500 text-white'
                } hover:opacity-80 transition-opacity`}>
                  {event.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="grid grid-cols-7 gap-2">
      {renderCalendar()}
    </div>
  );
}
