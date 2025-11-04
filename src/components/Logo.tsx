import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import logo from 'figma:asset/4ec4c6baa418ed98087b9743b5ede9ab00b3386d.png';

interface LogoProps {
  className?: string;
  variant?: 'navbar' | 'footer';
}

export function Logo({ className = '', variant = 'navbar' }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  // Fallback logo component
  const FallbackLogo = () => (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${variant === 'navbar' ? 'w-14 h-14' : 'w-12 h-12'} ${variant === 'navbar' ? 'bg-gradient-to-br from-[#005a7c] to-[#f57c00]' : 'bg-white/10'} rounded-lg flex items-center justify-center shadow-lg`}>
        <GraduationCap className={`${variant === 'navbar' ? 'h-8 w-8' : 'h-7 w-7'} ${variant === 'navbar' ? 'text-white' : 'text-[#f57c00]'}`} />
      </div>
      <div className="flex flex-col">
        <span className={`${variant === 'navbar' ? 'text-[#005a7c]' : 'text-white'} font-bold ${variant === 'navbar' ? 'text-lg' : 'text-lg'} leading-tight`}>
          Kaizari L&D
        </span>
        <span className="text-[#f57c00] text-xs font-semibold leading-tight">
          International
        </span>
      </div>
    </div>
  );

  // If image failed to load, show fallback
  if (imageError) {
    return <FallbackLogo />;
  }

  // Try to show the actual logo image
  return (
    <img 
      src={logo} 
      alt="Kaizari L&D International" 
      className={className}
      onError={() => setImageError(true)}
    />
  );
}
