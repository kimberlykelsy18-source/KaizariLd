import { X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function PromoBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#f57c00] to-[#ff9800] text-white py-2 px-3 md:py-2.5 md:px-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="inline-block text-xs md:text-sm">
            <span className="mr-1 md:mr-2">🎯</span>
            <span className="mr-2 md:mr-3">
              <strong>Limited Seats!</strong> <span className="hidden sm:inline">Financial Modeling with Excel Training</span><span className="sm:hidden">Financial Training</span>
            </span>
            <span className="hidden md:inline">| November 19-21, 2025</span>
            <span className="ml-2 md:ml-3 px-2 md:px-3 py-0.5 md:py-1 bg-white/20 rounded-full text-xs">
              10 Slots
            </span>
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-white/20 ml-1 md:ml-2 h-6 w-6 md:h-8 md:w-8"
        >
          <X className="h-3 w-3 md:h-4 md:w-4" />
        </Button>
      </div>
    </div>
  );
}
