"use client";

import { useState } from "react";
import {
  languages,
  LanguageCode,
  MarketCode,
  markets,
  translations,
} from "@/lib/market-config";

type NavbarProps = {
  market: MarketCode;
  language: LanguageCode;
  onMarketChange: (market: MarketCode) => void;
  onLanguageChange: (language: LanguageCode) => void;
};

export default function Navbar({
  market,
  language,
  onMarketChange,
  onLanguageChange,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const text = translations[language];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#" className="logo" onClick={closeMenu}>
          FRESHMOUTH
        </a>

        <nav className="desktop-nav">
          <a href="#subscribe">{text.subscribe}</a>
          <a href="#rewards">{text.rewards}</a>
          <a href="#products">{text.shop}</a>
          <a href="#story">{text.story}</a>
        </nav>

        <div className="desktop-nav-actions">
          <select
            className="nav-select"
            value={market}
            onChange={(event) =>
              onMarketChange(event.target.value as MarketCode)
            }
            aria-label="Select country"
          >
            {Object.entries(markets).map(([code, item]) => (
              <option key={code} value={code}>
                {item.flag} {item.shortLabel}
              </option>
            ))}
          </select>

          <select
            className="nav-select"
            value={language}
            onChange={(event) =>
              onLanguageChange(event.target.value as LanguageCode)
            }
            aria-label="Select language"
          >
            {Object.entries(languages).map(([code, item]) => (
              <option key={code} value={code}>
                {item.nativeLabel}
              </option>
            ))}
          </select>

          <button className="cart-button" type="button">
            Cart
          </button>
        </div>

        <button
          className={`hamburger ${isOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <nav className="mobile-nav">
          <a href="#subscribe" onClick={closeMenu}>
            {text.subscribe}
          </a>
          <a href="#rewards" onClick={closeMenu}>
            {text.rewards}
          </a>
          <a href="#products" onClick={closeMenu}>
            {text.shop}
          </a>
          <a href="#story" onClick={closeMenu}>
            {text.story}
          </a>
        </nav>

        <div className="mobile-options">
          <div className="mobile-field">
            <label>Country</label>
            <select
              className="nav-select"
              value={market}
              onChange={(event) =>
                onMarketChange(event.target.value as MarketCode)
              }
            >
              {Object.entries(markets).map(([code, item]) => (
                <option key={code} value={code}>
                  {item.flag} {item.shortLabel}
                </option>
              ))}
            </select>
          </div>

          <div className="mobile-field">
            <label>Language</label>
            <select
              className="nav-select"
              value={language}
              onChange={(event) =>
                onLanguageChange(event.target.value as LanguageCode)
              }
            >
              {Object.entries(languages).map(([code, item]) => (
                <option key={code} value={code}>
                  {item.nativeLabel}
                </option>
              ))}
            </select>
          </div>

          <button className="cart-button mobile-cart" type="button">
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}