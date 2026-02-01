"use client";

import React, { useEffect, useRef, memo } from "react";

type TradingViewWidgetProps = {
  symbol: string; // e.g. "UNISWAP3BASE:WETHUSDC_6C561B"
  interval?: string; // optional override
};

function TradingViewWidget({
  symbol,
  interval = "30",
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Prevent duplicate injection
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: false,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      interval,
      locale: "en",
      save_image: true,
      style: "1",
      symbol,
      theme: "dark",
      timezone: "Etc/UTC",
      backgroundColor: "#0F0F0F",
      gridColor: "rgba(242, 242, 242, 0.06)",
      withdateranges: true,
      autosize: true,
    });

    containerRef.current.appendChild(script);
  }, [symbol, interval]);

  return (
    <div
      ref={containerRef}
      className="
        w-full
        h-full
      "
    >
      <div className="tradingview-widget-container__widget w-full h-full" />
    </div>
  );
}

export default memo(TradingViewWidget);
