import { X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function PromoBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#f57c00] to-[#ff9800] text-white py-3 px-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="inline-block">
            <span className="mr-2">🎯</span>
            <span className="mr-3">
              <strong>Limited Seats!</strong> Financial Modeling with Excel Training
            </span>
            <span className="hidden sm:inline">| November 19-21, 2025</span>
            <span className="ml-3 px-3 py-1 bg-white/20 rounded-full text-sm">
              10 Slots Remaining
            </span>
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-white/20 ml-2"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
