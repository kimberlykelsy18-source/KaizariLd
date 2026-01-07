import { EventCard } from './EventCard';

export function Events() {
  // Keep non-2025 events. Removed the Financial Modeling (Nov 2025) course entry.
  const events = [
    {
      title: 'Market + Product Research Survey',
      description: 'Help us shape the future of corporate training - Share your insights!',
      date: 'Ongoing | Open Now',
      duration: '10-15 Minutes',
      slotsRemaining: 50,
      image: 'https://images.unsplash.com/photo-1595988163550-060b7c94acee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJ1c2luZXNzJTIwc3VydmV5JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYyMDE4NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      details: `We're conducting comprehensive market research to better understand training needs in the corporate sector!

EXCITING REWARDS FOR PARTICIPANTS:
• 🎁 EVERYONE gets a 15% discount voucher for any future course
• 🎓 5 LUCKY WINNERS will receive completely FREE courses (worth up to KSh 120,000)
• 🏆 1 GRAND PRIZE WINNER gets FREE team training for up to 5 people
• 📚 Early access to new courses (survey participants only)
• 🎯 Monthly prize draws with more chances to win

Your Input Matters:
We want to understand your organization's training challenges, preferences, and future needs. Your feedback will directly influence our upcoming programs and services.

The survey takes just 10-15 minutes and covers:
• Current training challenges in your organization
• Preferred learning formats and delivery methods
• Topics and skills most needed
• Budget and decision-making processes

All responses are confidential and will be used solely for improving our services.

Winners will be announced monthly via email and on our website!`,
      type: 'survey' as const,
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#005a7c] mb-4">
            Upcoming Events & Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our expertly designed training programs and take your professional skills to the next level
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
