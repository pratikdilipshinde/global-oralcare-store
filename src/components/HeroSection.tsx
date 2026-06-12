import Image from "next/image";
import {
  formatMoney,
  LanguageCode,
  MarketCode,
  markets,
  translations,
} from "@/lib/market-config";

type HeroSectionProps = {
  market: MarketCode;
  language: LanguageCode;
};

export default function HeroSection({ market, language }: HeroSectionProps) {
  const text = translations[language];
  const selectedMarket = markets[market];

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{text.heroEyebrow}</p>

        <h1>{text.heroTitle}</h1>

        <p className="hero-text">{text.heroText}</p>

        <div className="hero-actions">
          <a href="#products" className="primary-button">
            {text.heroPrimary}
          </a>

          <a href="#products" className="secondary-button">
            {text.heroSecondary}
          </a>
        </div>

        <p className="market-note">
          {selectedMarket.flag} Prices shown for {selectedMarket.label} in{" "}
          {selectedMarket.currency}.
        </p>
      </div>

      <div className="hero-visual">
        <div className="hero-image-card">
          <Image
            src="/images/hero-oral-care-collection.png"
            alt="Premium oral care products collection"
            fill
            priority
            sizes="(max-width: 1000px) 100vw, 50vw"
            className="hero-product-image"
          />
        </div>

        <div className="sale-badge">
          <span>Routine from</span>
          <strong>{formatMoney(39, market)}</strong>
        </div>
      </div>
    </section>
  );
}