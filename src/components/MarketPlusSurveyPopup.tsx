import React from 'react';

interface MarketPlusSurveyPopupProps {
  trigger: 'scroll' | 'booking';
  onClose?: () => void;
  onTakeSurvey?: () => void;
}

// Disabled popup to remove 2025 Financial Modeling promotional content.
// Keeps the component API so other imports don't break.
export function MarketPlusSurveyPopup(_props: MarketPlusSurveyPopupProps) {
  return null;
}
