import React from 'react';

interface SparkleElementProps {
  className?: string;
  delay?: number;
}

const SparkleElement: React.FC<SparkleElementProps> = ({ className = "", delay = 0 }) => {
  return (
    <div 
      className={`absolute w-8 h-8 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full animate-sparkle"
      >
        <path
          d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
          fill="currentColor"
          className="text-accent/60"
        />
      </svg>
    </div>
  );
};

export default SparkleElement;