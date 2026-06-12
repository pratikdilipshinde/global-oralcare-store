"use client";

import { AnimatePresence, motion } from "framer-motion";
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
    <motion.header
      className="navbar"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="nav-inner">
        <motion.a
          href="#"
          className="logo"
          onClick={closeMenu}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          FRESHMOUTH
        </motion.a>

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

          <motion.button
            className="cart-button"
            type="button"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            Cart
          </motion.button>
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu show"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
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

              <motion.button
                className="cart-button mobile-cart"
                type="button"
                whileTap={{ scale: 0.97 }}
              >
                Cart
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}