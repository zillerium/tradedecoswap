'use client';

export default function LogoScroll() {
  const logos = [
    '/aerodromelogo.png',
    '/hyperliquidlogo.png',
    '/meteroalogo.png',
    '/orcalogo.png',
    '/pancakeswaplogo.png',
    '/raydiumlogo.png',
    '/sushiswaplogo.png',
    '/Uniswaplogo.png',
  ];

  return (
    <div className="w-full overflow-hidden bg-black py-8">
      {/* Container with margins */}
      <div className="mx-8 md:mx-16 lg:mx-24">
        <div className="relative flex items-center">
          {/* First set of logos */}
          <div className="flex animate-scroll items-center shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-black min-w-[140px] md:min-w-[170px] lg:min-w-[200px] px-4 md:px-6 lg:px-8"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="h-8 md:h-10 lg:h-12 w-auto max-w-[100px] md:max-w-[120px] lg:max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex animate-scroll items-center shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-black min-w-[140px] md:min-w-[170px] lg:min-w-[200px] px-4 md:px-6 lg:px-8"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="h-8 md:h-10 lg:h-12 w-auto max-w-[100px] md:max-w-[120px] lg:max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
