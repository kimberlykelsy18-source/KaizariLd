import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, Users, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';

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
    return events.filter(event => {
      const eventDate = new Date(event.date);
      const endDate = event.endDate ? new Date(event.endDate) : eventDate;
      
      return date >= new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()) &&
             date <= new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    });
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
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500 px-1">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <>
      <Card>
        <CardContent className="p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl text-[#005a7c]">
              {months[currentMonth]} {year}
            </h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-0 border border-gray-200">
            {/* Day headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="bg-gray-100 border border-gray-200 p-2 text-center text-sm">
                {day}
              </div>
            ))}
            {/* Calendar days */}
            {renderCalendar()}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#f57c00] rounded" />
              <span className="text-sm text-gray-600">Course</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#005a7c] rounded" />
              <span className="text-sm text-gray-600">Workshop</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded" />
              <span className="text-sm text-gray-600">Event</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Event Details Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-[#005a7c] text-2xl">
                  {selectedEvent.title}
                </DialogTitle>
                <DialogDescription>
                  <Badge className={
                    selectedEvent.type === 'course' ? 'bg-[#f57c00]' :
                    selectedEvent.type === 'workshop' ? 'bg-[#005a7c]' :
                    'bg-green-500'
                  }>
                    {selectedEvent.type.toUpperCase()}
                  </Badge>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <p className="text-gray-700">{selectedEvent.description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="h-5 w-5 text-[#f57c00] mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Date</div>
                      <div>
                        {selectedEvent.date.toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                        {selectedEvent.endDate && selectedEvent.endDate.getTime() !== selectedEvent.date.getTime() && (
                          <> - {selectedEvent.endDate.toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}</>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#f57c00] mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div>{selectedEvent.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#f57c00] mt-0.5" />
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div>{selectedEvent.location}</div>
                    </div>
                  </div>

                  {selectedEvent.seats && (
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-[#f57c00] mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-500">Seats Available</div>
                        <div>{selectedEvent.seats}</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="h-5 w-5 text-[#f57c00]" />
                    <h4 className="text-[#005a7c]">Pricing</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Individual</div>
                      <div className="text-xl text-[#f57c00]">{selectedEvent.price.individual}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Corporate (up to 5 pax)</div>
                      <div className="text-xl text-[#f57c00]">{selectedEvent.price.corporate}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    className="flex-1 bg-[#f57c00] hover:bg-[#d66a00]"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        setSelectedEvent(null);
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Register Now
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedEvent(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
