import { EventCard } from '../components/EventCard';
import { EventCalendar } from '../components/EventCalendar';

export function EventsPage() {
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
    {
      id: 'fm-march',
      title: 'Financial Modeling Training - March 2026',
      date: 'March 2026 (Dates TBD)',
      duration: '3 Days',
      location: 'TBD / Online',
      description: 'Comprehensive hands-on financial modeling with Excel training led by Aurthur Ogonji. Master financial model structure, cash flows, projections, and valuation techniques.',
      price: { individual: 'Contact', corporate: 'Contact' },
      seats: 'Limited seats',
      type: 'course' as const,
      image: 'https://images.unsplash.com/photo-1526378723388-8b7f4f30f79f?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  // Calendar events for 2026 - Q1 is booked for finance trainings
  const calendarEvents = [
    {
      id: 'q1-finance',
      title: 'Q1 2026 - Finance Trainings (Booked)',
      date: new Date(2026, 0, 15),
      endDate: new Date(2026, 2, 31),
      duration: 'Q1 2026',
      location: 'Various',
      price: { individual: 'Contact', corporate: 'Contact' },
      seats: 'Limited',
      type: 'course' as const,
    },
    {
      id: 'fm-march-cal',
      title: 'Financial Modeling Training - March (TBD)',
      date: new Date(2026, 2, 15),
      endDate: new Date(2026, 2, 17),
      duration: '3 Days',
      location: 'TBD / Online',
      price: { individual: 'Contact', corporate: 'Contact' },
      seats: 'Limited',
      type: 'course' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#005a7c] mb-3">Events & Training Programs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finance training events are available in Q1 2026. Register your interest and a sales representative will contact you with details.
          </p>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#005a7c]">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((ev) => (
              <EventCard
                key={ev.id}
                title={ev.title}
                description={ev.description}
                date={ev.date}
                duration={ev.duration}
                slotsRemaining={ev.seats === 'Limited seats' ? 20 : 50}
                image={ev.image}
                details={ev.description}
                type={ev.type}
              />
            ))}
          </div>
        </div>

        {/* 2026 Calendar Section */}
        <div className="bg-white rounded-2xl shadow-sm border p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#005a7c]">2026 Training Calendar</h2>
          <EventCalendar events={calendarEvents} year={2026} />

          <div className="mt-8 p-4 bg-[#005a7c]/5 rounded-lg border border-[#005a7c]/10">
            <h3 className="font-semibold text-[#005a7c] mb-2">Q1 2026 - Finance Training Quarter</h3>
            <p className="text-sm text-gray-600">
              Q1 2026 is dedicated to finance training programs. All sessions for the quarter are being scheduled.
              Financial Modeling Training dates in March will be confirmed soon.
            </p>
          </div>
        </div>

        {/* Group Bookings Section */}
        <div className="bg-gradient-to-r from-[#005a7c] to-[#003d54] rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-3">Group Bookings & Custom Training</h3>
            <p className="text-white/80 mb-6">
              Looking for customized training for your team? Contact us to discuss tailored programs that meet your organization's specific needs.
            </p>
            <a
              href="https://wa.me/254713664234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contact / Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
