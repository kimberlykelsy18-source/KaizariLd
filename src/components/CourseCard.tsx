import { Button } from './ui/button';
import Image from 'next/image';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: { individual: string; corporate: string };
  image: string;
  details?: string;
  outcomes?: string[];
  hasUpcomingEvent?: boolean;
  upcomingEventDate?: string;
}

export function CourseCard(props: CourseCardProps) {
  const { title, description, duration, level, price, image, details, outcomes, hasUpcomingEvent, upcomingEventDate } = props;

  const handleRegisterClick = () => {
    // placeholder - open registration modal or navigate to course page
    window.location.href = '/courses';
  };

  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-40 w-full">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#005a7c]">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
          <div>{duration}</div>
          <div>{level}</div>
        </div>

        {/* Pricing and register area - updated with WhatsApp CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Starting from</div>
            <div className="text-2xl text-[#f57c00]">{price.individual}</div>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleRegisterClick}
              className="bg-[#f57c00] hover:bg-[#d66a00] text-white"
            >
              Register Now
            </Button>

            {/* WhatsApp CTA for pricing/booking */}
            <a
              href="https://wa.me/254713664234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 bg-[#25D366] text-white rounded-md"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {hasUpcomingEvent && upcomingEventDate && (
          <div className="mt-3 text-sm text-gray-600">Upcoming: {upcomingEventDate}</div>
        )}

        {details && (
          <div className="mt-4 text-sm text-gray-700">
            <p>{details}</p>
            {outcomes && (
              <ul className="list-disc list-inside mt-2">
                {outcomes.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
