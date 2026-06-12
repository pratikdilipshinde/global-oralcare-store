"use client";

import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProductCards from "./ProductCards";
import Footer from "./Footer";
import {
  detectMarketFromCountryCode,
  isLanguageCode,
  isMarketCode,
  LanguageCode,
  MarketCode,
} from "@/lib/market-config";

export default function StorefrontPage() {
  const [market, setMarket] = useState<MarketCode>("us");
  const [language, setLanguage] = useState<LanguageCode>("en");

  useEffect(() => {
    const savedMarket = localStorage.getItem("market");
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage && isLanguageCode(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      const browserLanguage = navigator.language.slice(0, 2);

      if (isLanguageCode(browserLanguage)) {
        setLanguage(browserLanguage);
      }
    }

    if (savedMarket && isMarketCode(savedMarket)) {
      setMarket(savedMarket);
      return;
    }

    async function detectCountry() {
      try {
        const response = await fetch("/api/geo");
        const data = await response.json();

        const detectedMarket = detectMarketFromCountryCode(data.country);
        setMarket(detectedMarket);
        localStorage.setItem("market", detectedMarket);
      } catch {
        setMarket("us");
      }
    }

    detectCountry();
  }, []);

  function handleMarketChange(nextMarket: MarketCode) {
    setMarket(nextMarket);
    localStorage.setItem("market", nextMarket);
  }

  function handleLanguageChange(nextLanguage: LanguageCode) {
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  }

  return (
    <main>
      <TopBar market={market} language={language} />

      <Navbar
        market={market}
        language={language}
        onMarketChange={handleMarketChange}
        onLanguageChange={handleLanguageChange}
      />

      <HeroSection market={market} language={language} />

      <ProductCards market={market} language={language} />

      <Footer language={language} />
    </main>
  );
}