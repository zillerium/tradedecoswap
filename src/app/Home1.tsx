'use client';

export default function Home1() {
  return (
    <div
      className="
        flex-1
        flex
        items-center
        justify-end
        pl-8 md:pl-12 lg:pl-20
        pr-6 md:pr-8 lg:pr-10
        py-6
      "
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-left max-w-xl">

        <span className="block text-sm md:text-base text-gray-300 uppercase mb-4 font-normal">
          Stop Slippage Losses
        </span>

        One platform for{' '}
        <span className="text-blue-500">trading</span> and{' '}
        <span className="text-blue-500">swap intelligence</span>

        <span className="block text-lg md:text-xl text-gray-300 mt-6 font-normal">
          Your key aid to making intelligent trading decisions.
        </span>

      </h1>
    </div>
  );
}

