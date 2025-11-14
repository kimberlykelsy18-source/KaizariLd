interface LogoProps {
  className?: string;
  variant?: 'navbar' | 'footer';
}

export function Logo({ className = '', variant = 'navbar' }: LogoProps) {
  // For footer, we want white color; for navbar, we want the brand color for better visibility
  const color = variant === 'footer' ? '#ffffff' : '#005a7c';
  
  return (
    <svg 
      viewBox="0 0 320 380" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Stylized K symbol */}
      <g transform="translate(70, 30)">
        {/* Left diagonal line (main stroke) - slanted from top to bottom */}
        <line 
          x1="80" 
          y1="30" 
          x2="50" 
          y2="190" 
          stroke={color} 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        
        {/* Top right diagonal line - from middle of left line to upper right */}
        <line 
          x1="65" 
          y1="110" 
          x2="140" 
          y2="40" 
          stroke={color} 
          strokeWidth="3.5" 
          strokeLinecap="round"
        />
        
        {/* Horizontal line - extends to the right from middle */}
        <line 
          x1="65" 
          y1="130" 
          x2="155" 
          y2="130" 
          stroke={color} 
          strokeWidth="3.5" 
          strokeLinecap="round"
        />
        
        {/* Curved swoosh - elegant arc wrapping around the junction */}
        <path 
          d="M 50 100 Q 40 110, 40 125 Q 40 145, 55 155" 
          stroke={color} 
          strokeWidth="3.5" 
          fill="none"
          strokeLinecap="round"
        />
      </g>
      
      {/* Company name text */}
      <text 
        x="160" 
        y="300" 
        textAnchor="middle" 
        fill={color} 
        fontSize="40" 
        fontWeight="500"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        letterSpacing="4"
      >
        KAIZARI L&D
      </text>
    </svg>
  );
}
