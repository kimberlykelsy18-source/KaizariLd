import { EventCard } from '../components/EventCard';
import { EventCalendar } from '../components/EventCalendar';
import { Button } from '../components/ui/button';

export function EventsPage() {
  // Keep Market + Product Research ongoing
  const events = [
    {
      id: 'survey',
      title: 'Market + Product Research Survey',
      date: 'Ongoing | Open Now',
      duration: '10-15 Minutes',
      location: 'Online Survey',
      description: 'Help us shape the future of corporate training! Participate in our survey and get a 15% discount voucher.',
      price: { individual: 'FREE', corporate: 'FREE' },
      seats: 'Ongoing',
      type: 'survey' as const,
      image: 'https://images.unsplash.com/photo-1595988163550-060b7c94acee?q=80&w=1200&auto=format&fit=crop',
    },
    // Finance Q1 events (showing financial modeling in March — dates TBD)
    {
      id: 'fm-march',
      title: 'Financial Modeling Bootcamp',
      date: 'March (TBD), 2026',
      duration: '3 Days',
      location: 'TBD / Online - LMS',
      description: 'Comprehensive financial modeling bootcamp — dates and venue to be confirmed in March 2026. Contact us to express interest and reserve a seat.',
      price: { individual: 'Contact', corporate: 'Contact' },
      seats: 'Limited seats',
      type: 'course' as const,
      image: 'https://images.unsplash.com/photo-1526378723388-8b7f4f30f79f?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  // Calendar events for 2026 Q1 (placeholder dates used so they show on calendar; update when confirmed)
  const calendarEvents = [
    {
      id: 'core-excel',
      title: 'Core Excel — Online',
      date: new Date(2026, 0, 20), // Jan 20, 2026 (placeholder)
      endDate: new Date(2026, 0, 20),
      duration: '1 Day',
      location: 'Online - LMS',
      price: { individual: 'Contact', corporate: 'Contact' },
      seats: 'Available',
      type: 'course' as const,
    },
    {
      id: 'core-finmodel',
      title: 'Core Financial Modeling — March (TBD)',
      date: new Date(2026, 2, 15), // March 15, 2026 placeholder
      endDate: new Date(2026, 2, 17),
      duration: '3 Days',
      location: 'TBD / Online',
      price: { individual: 'Contact', corporate: 'Contact' },
      seats: 'Limited',
      type: 'course' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl text-[#005a7c]">Events & Training</h1>
          <p className="mt-2 text-gray-600">Finance training events are available in Q1 2026. More events for other categories will be announced soon — get ready for 2026.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl mb-4 text-[#005a7c]">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((ev) => (
                <EventCard
                  key={ev.id}
                  title={ev.title}
                  description={ev.description}
                  date={ev.date as any}
                  duration={ev.duration}
                  slotsRemaining={ev.seats === 'Limited' ? 10 : 50}
                  image={ev.image}
                  details={ev.description}
                  type={ev.type}
                />
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://wa.me/254713664234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-md"
              >
                Contact / Book via WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl mb-4 text-[#005a7c]">2026 Calendar</h2>
            <EventCalendar events={calendarEvents} year={2026} />
            <div className="mt-6 text-sm text-gray-600">
              More events are coming. Prepare for 2026 — finance training events available in Q1. For group bookings or custom training, contact us via WhatsApp.
            </div>

            <div className="mt-6">
              <Button variant="outline" onClick={() => window.open('https://wa.me/254713664234', '_blank')}>
                Request Custom Training (WhatsApp)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
