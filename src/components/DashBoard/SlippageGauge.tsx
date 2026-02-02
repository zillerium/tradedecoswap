'use client';

type SlippageGaugeProps = {
  slippagePercent: number;
  maxPercent?: number; // Default 1%
};

export default function SlippageGauge({ slippagePercent, maxPercent = 1 }: SlippageGaugeProps) {
  // Calculate position (0-100%) on the gauge
  const position = Math.min((slippagePercent / maxPercent) * 100, 100);
  
  // Determine color based on position
  const getColor = (pos: number) => {
    if (pos < 20) return '#FFA500'; // Orange (good)
    if (pos < 40) return '#FF8C00'; // Dark orange
    if (pos < 60) return '#FF6B00'; // Orange-red
    if (pos < 80) return '#FF4500'; // Red-orange
    return '#FF0000'; // Red (bad)
  };

  const indicatorColor = getColor(position);

  return (
    <div className="w-full space-y-2">
      {/* Value display */}
      <div className="text-2xl font-bold text-white text-center">
        {slippagePercent.toFixed(2)}%
      </div>

      {/* Gauge bar container */}
      <div className="relative w-full h-8 rounded-full overflow-hidden">
        {/* Gradient background bar */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #FFA500 0%, #FF8C00 25%, #FF6B00 50%, #FF4500 75%, #FF0000 100%)'
          }}
        />
        
        {/* Position indicator (circle) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300"
          style={{
            left: `calc(${position}% - 12px)`,
            backgroundColor: indicatorColor,
          }}
        />
      </div>

      {/* Labels */}
      <div className="flex justify-between text-xs text-gray-400">
        <span>0%</span>
        <span>{maxPercent}%</span>
      </div>

      {/* Status text */}
      <div className="text-center text-sm">
        {position < 20 && <span className="text-orange-400">Low Slippage</span>}
        {position >= 20 && position < 50 && <span className="text-orange-500">Moderate Slippage</span>}
        {position >= 50 && position < 80 && <span className="text-red-400">High Slippage</span>}
        {position >= 80 && <span className="text-red-500">Very High Slippage</span>}
      </div>
    </div>
  );
}
